import React from "react";
import "../../public/css/main.css";

type TotalProps = {
  totalAmount: number;
};

const Total = ({ totalAmount }: TotalProps) => {
  return (
    <div className="container-sm">
      <span>小計：{totalAmount}</span>
    </div>
  );
};

export default Total;
