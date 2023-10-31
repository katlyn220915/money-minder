"use client";

import React, { useState, useEffect } from "react";
import { BtnStart, Hero, Navbar } from "../components/index";
import app from "./firebase";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const Home: React.FC = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState<User | null>(null);
  console.log(user);
  useEffect(() => {
    const loginState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    console.log(loginState);
  });
  return (
    <main>
      <Navbar loginState={user !== null ? true : false} />
      <Hero />
      {user === null ? (
        <p className="hint__guide-to-login">請先登入</p>
      ) : (
        <BtnStart />
      )}
    </main>
  );
};

export default Home;
