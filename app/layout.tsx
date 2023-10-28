"use client";
import React, { ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// export const metadata = {
//   title: "Money minder - 您的記帳小幫手",
//   description: "你今天記帳了嗎？快快來記帳！",
// };

//建立RootLayout的Props的interface
interface RootLayoutProps {
  children: ReactNode; //代表React節點
}

//原本的寫法：
/*
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
*/

//加入Ts寫法：
//把RootLayout指定為React.FC(代表functional component)，並且變成箭頭函式
const RootLayout: React.FC = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon" />
      </head>
      <body>
        <BrowserRouter>
          <Routes>
            <Route path="/">首頁</Route>
            <Route path="/signin">註冊</Route>
          </Routes>
        </BrowserRouter>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
