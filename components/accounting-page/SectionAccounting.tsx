import React from "react";
import "../../public/css/main.css";
import AccountingForm from "./AccountingForm";
import { AccountingFormProps } from "../../types";

const SectionAccounting: React.FC<AccountingFormProps> = ({
  email,
  onAddRecord,
}) => {
  return (
    <section className="section__accounting">
      <h2 className="userName">您正以{email}的身份進行記帳</h2>
      <AccountingForm email={email} onAddRecord={onAddRecord} />
    </section>
  );
};

export default SectionAccounting;
