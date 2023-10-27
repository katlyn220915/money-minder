"use client";
import { useState } from "react";
import SiginForm from "./SigninForm";

interface SigninSectionProps {
  children: React.ReactNode;
}

const SiginSection: React.FC<SigninSectionProps> = () => {
  const [activeItem, setActiveItem] = useState("register");

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
      <SiginForm activeItem={activeItem} />
      <button className="btn btn__signin">
        {activeItem === "register" ? "註冊" : "登入"}
      </button>
      <span className="btn__switch" onClick={() => handleSetActiveItem()}>
        已經有帳戶，點此登入！
      </span>
    </section>
  );
};

export default SiginSection;
