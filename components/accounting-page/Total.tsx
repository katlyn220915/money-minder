import React from "react";
import "../../public/css/main.css";
import { TotalProps } from "../../types";

const Total: React.FC<TotalProps> = ({ totalAmount }) => {
  return (
    <div className="container-sm">
      <span>小計：{totalAmount}</span>
    </div>
  );
};

export default Total;
