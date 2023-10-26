import React from "react";
import "../../public/css/main.css";
import AccountingForm from "./AccountingForm";
import { AccountingFormProps } from "../../types";

const SectionAccounting: React.FC<AccountingFormProps> = ({ onAddRecord }) => {
  return (
    <section className="section__accounting">
      <AccountingForm onAddRecord={onAddRecord} />
    </section>
  );
};

export default SectionAccounting;
