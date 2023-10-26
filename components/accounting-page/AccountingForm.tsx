"use client";

import React, { useState } from "react";
import "../../public/css/main.css";
import { AccountingFormProps } from "../../types";

const AccountingForm: React.FC<AccountingFormProps> = ({ onAddRecord }) => {
  const [expenseOrIncome, setExpenseOrIncome] = useState<string>("expense");
  const [bill, setBill] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [isInputClicked, setIsInputClicked] = useState<boolean>(false);

  const handleAddRecord = (
    e: React.MouseEvent<HTMLButtonElement>,
    bill: number
  ) => {
    e.preventDefault();
    if (bill === 0 || description === "") return;
    if (bill < 0) {
      bill = Math.abs(bill);
    }

    bill = expenseOrIncome === "expense" ? -bill : bill;

    onAddRecord({
      id: Date.now(),
      bill,
      description,
    });

    setBill(0);
    setDescription("");
    setExpenseOrIncome("expense");
    setIsInputClicked(false);
  };

  const handleInputClick = () => {
    setIsInputClicked(true);
  };

  let billInputClassName: string;
  if (bill === 0) {
    billInputClassName = "input-group input-group-empty";
  } else {
    billInputClassName = "input-group input-group-success";
  }

  let desInputClassName: string;
  if (description === "" || description === null) {
    desInputClassName = "input-group input-group-empty";
  } else {
    desInputClassName = "input-group input-group-success";
  }

  return (
    <form className="accounting__form container-sm">
      <div className="accounting__form__block">
        <select
          value={expenseOrIncome}
          onChange={(e) => setExpenseOrIncome(e.target.value)}
          className="input-group"
        >
          <option value="expense">支出</option>
          <option value="income">收入</option>
        </select>
        <input
          className={isInputClicked ? billInputClassName : "input-group"}
          placeholder="請輸入金額"
          type="number"
          value={bill}
          onChange={(e) => {
            setBill(Number(e.target.value));
          }}
          onClick={handleInputClick}
          required
        />
        <input
          className={isInputClicked ? desInputClassName : "input-group"}
          placeholder="請輸入詳細資訊"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button
          className="btn btn__action"
          onClick={(e) => handleAddRecord(e, bill)}
        >
          新增紀錄
        </button>
      </div>
    </form>
  );
};

export default AccountingForm;
