import React from "react";
import "../../public/css/main.css";
import { getAuth, signOut } from "firebase/auth";
import app from "../../app/firebase";

interface NavbarProps {
  loginState: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ loginState }) => {
  const auth = getAuth(app);
  const handleLogout = () => {
    signOut(auth)
      .then((a) => {
        console.log(a);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <nav className="nav">
      <h1 className="heading__primary">React練習專案</h1>
      {loginState === true ? (
        <a onClick={() => handleLogout()} className="nav__btn">
          登出會員
        </a>
      ) : (
        <a href="/signin" className="nav__btn">
          註冊/登入
        </a>
      )}
    </nav>
  );
};

export default Navbar;
