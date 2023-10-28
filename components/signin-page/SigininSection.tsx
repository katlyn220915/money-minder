"use client";
import { useState } from "react";
import SiginForm from "./SigninForm";
import BtnStart from "../homepage/BtnStart";

interface SigninSectionProps {
  children: React.ReactNode;
}

const SiginSection: React.FC<SigninSectionProps> = ({}) => {
  const [activeItem, setActiveItem] = useState("register");
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleRegisterState = (status: boolean) => {
    if (status === true) {
      setIsSuccessful(true);
    } else {
      setIsSuccessful(false);
    }
  };

  const handleSetActiveItem = () => {
    if (activeItem === "register") {
      setActiveItem("signin");
    } else {
      setActiveItem("register");
    }
  };

  return (
    <section className="section__signin container-sm">
      <h3 className="heading__tertiary">
        {activeItem === "register" ? "註冊會員" : "登入會員"}
      </h3>
      <SiginForm
        activeItem={activeItem}
        status={isSuccessful}
        onSetState={handleRegisterState}
      />

      {isSuccessful ? (
        <BtnStart />
      ) : (
        <span className="btn__switch" onClick={() => handleSetActiveItem()}>
          {activeItem === "register"
            ? "已經有帳戶，請點此登入"
            : "還沒有帳戶，請點此註冊"}
        </span>
      )}
    </section>
  );
};

export default SiginSection;
