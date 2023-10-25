import React from "react";
import "../../public/css/main.css";

const Item = ({ id, bill, description, onDeleteItem }) => {
  return (
    <li className="bill-list__item">
      <span
        className={
          bill < 0
            ? "bill-list__item__bill bill-list__item__bill-expense"
            : "bill-list__item__bill bill-list__item__bill-income"
        }
      >
        {bill}
      </span>
      <p className="bill-list__item__description">{description}</p>
      <button
        className="btn btn__action"
        onClick={() => onDeleteItem(id, bill)}
      >
        刪除
      </button>
    </li>
  );
};

export default Item;
