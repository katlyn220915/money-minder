import React from "react";
import "../../public/css/main.css";

const Total = ({ totalAmount }) => {
  return (
    <div className="container-sm">
      <span>小計：{totalAmount}</span>
    </div>
  );
};

export default Total;
