"use client";

import React from "react";
import Link from "next/link";
import "../../public/css/main.css";

const ButtonBackhome = ({ children }) => {
  return (
    <div className="c-box">
      <Link href="/">
        <button className="btn btn__cta">{children}</button>
      </Link>
    </div>
  );
};

export default ButtonBackhome;
