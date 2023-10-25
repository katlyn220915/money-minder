import React from "react";
import "../../public/css/main.css";
import AccountingForm from "./AccountingForm";

const SectionAccounting = ({ onAddRecord }) => {
  return (
    <section className="section__accounting">
      <AccountingForm onAddRecord={onAddRecord} />
    </section>
  );
};

export default SectionAccounting;
