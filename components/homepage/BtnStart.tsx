"use client";

import React from "react";
import Link from "next/link";
import "../../public/css/main.css";

const BtnStart: React.FC = () => {
  return (
    <div className="c-box">
      <Link href="/accounting">
        <button className="btn btn__cta">開始記帳</button>
      </Link>
    </div>
  );
};

export default BtnStart;
