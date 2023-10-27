"use client";
import React from "react";
import { useState } from "react";

interface SigninFormProps {
  activeItem: string;
}

const SiginForm: React.FC<SigninFormProps> = ({ activeItem }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form className="form__signin">
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
      </form>
    </>
  );
};

export default SiginForm;
