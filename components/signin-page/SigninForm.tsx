"use client";
import React from "react";
import { useState } from "react";
import app from "../../app/firebase";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

interface SigninFormProps {
  activeItem?: string;
  status?: boolean;
  onSetState?: (state: boolean) => void;
}

const SiginForm: React.FC<SigninFormProps> = ({
  activeItem,
  status,
  onSetState,
}) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const handleSumit = (e) => {
    e.preventDefault();
    if (userName === "" && activeItem === "register") {
      handleLoginError("missing-userName");
      return;
    }
    if (activeItem === "register") {
      const auth = getAuth(app);
      const db = getFirestore(app);
      const userCollection = collection(db, "user");
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          onSetState(true);
          const userDocRef = doc(userCollection, email);
          setDoc(userDocRef, {
            name: userName,
            email,
            password,
          })
            .then(() => {
              console.log("用户信息已成功存储到 Firestore。");
            })
            .catch((error) => {
              console.error("存储用户信息时出错：", error);
            });
        })
        .catch((error) => {
          console.log(error.code);
          handleLoginError(error.code);
        });
    } else if (activeItem === "signin") {
      const auth = getAuth(app);
      const db = getFirestore(app);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          onSetState(true);
        })
        .catch((error) => {
          console.log(error.code);
          handleLoginError(error.code);
        });
    }
  };

  function handleLoginError(code) {
    if (code === "auth/invalid-email") {
      setErrorMessage("無效的電子郵件");
    } else if (code === "auth/email-already-in-use") {
      setErrorMessage("電子信箱已被註冊過");
    } else if (code === "auth/weak-password") {
      setErrorMessage("密碼強度太弱，請設置6位數以上密碼");
    } else if (code === "auth/wrong-password") {
      setErrorMessage("密碼不正確");
    } else if (code === "auth/missing-password") {
      setErrorMessage("請輸入密碼");
    } else if (code === "missing-userName") {
      setErrorMessage("請輸入名字");
    }
  }

  return (
    <>
      {status ? (
        <div className="successful__block">
          {activeItem === "signin" ? "登入" : "註冊"}成功！
        </div>
      ) : (
        <form className="form__signin" onSubmit={(e) => handleSumit(e)}>
          {activeItem === "register" ? (
            <label className="label-group">
              姓名：
              <input
                className="input-group"
                type="text"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              ></input>
            </label>
          ) : (
            ""
          )}
          <label className="label-group">
            信箱：
            <input
              className="input-group"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </label>
          <label className="label-group">
            密碼：
            <input
              className="input-group"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </label>
          <button className="btn btn__signin">
            {activeItem === "register" ? "註冊" : "登入"}
          </button>
          {errorMessage ? <p>{errorMessage}</p> : null}
        </form>
      )}
    </>
  );
};

export default SiginForm;
