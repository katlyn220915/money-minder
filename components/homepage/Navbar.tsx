import React from "react";
import "../../public/css/main.css";

const Navbar: React.FC = () => {
  return (
    <nav className="nav">
      <h1 className="heading__primary">React練習專案</h1>
      <a href="/" className="nav__btn">
        首頁
      </a>
      <a href="/signin" className="nav__btn">
        註冊/登入
      </a>
    </nav>
  );
};

export default Navbar;
