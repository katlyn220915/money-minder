"use client";

import {
  ButtonBackhome,
  BillList,
  Total,
  SectionAccounting,
  Layout,
} from "@/components";
import { useAmp } from "next/amp";
import { useState } from "react";
import Head from "next/head";

function AccountingPage() {
  const [list, setList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleAddRecord = (newItem) => {
    setList((prevList) => [...prevList, newItem]);
    setTotalAmount(totalAmount + Number(newItem.bill));
  };

  const handleDeleteItem = (id, bill) => {
    setList((preList) => preList.filter((list) => list.id !== id));
    if (totalAmount !== 0) {
      setTotalAmount(totalAmount - Number(bill));
    }
  };

  return (
    <Layout>
      <Head>
        <title>開始記帳囉！</title>
        <meta name="description" content="你今天記帳了吗？快快來記帳！" />
        <link rel="icon" href="/img/favicon.png"></link>
      </Head>
      <main>
        <SectionAccounting onAddRecord={handleAddRecord} />
        <BillList list={list} onDeleteItem={handleDeleteItem} />
        <Total totalAmount={totalAmount} />
        <ButtonBackhome>返回首頁</ButtonBackhome>
      </main>
    </Layout>
  );
}

export default AccountingPage;
