import React, { useState } from "react";
import Head from "next/head";
import { ListItemProps } from "../types";
import app from "../app/firebase";
import { getAuth, User, onAuthStateChanged } from "firebase/auth";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";

import {
  ButtonBackhome,
  BillList,
  Total,
  SectionAccounting,
  Layout,
} from "../components/index";

const AccountingPage: React.FC = () => {
  const [list, setList] = useState<ListItemProps[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const auth = getAuth(app);
  const [user, setUser] = useState<User | null>(null);
  const db = getFirestore(app);
  let currentUserCollection: any;
  React.useEffect(() => {
    const loginState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    if (user !== null) {
      currentUserCollection = collection(db, `user/${user.email}/list`);
    }
  });

  const getBillList = (email: string) => {};

  const handleAddRecord = (newItem: ListItemProps) => {
    setList((prevList) => [...prevList, newItem]);
    setTotalAmount(totalAmount + Number(newItem.bill));

    const listItem = doc(currentUserCollection, newItem.id.toString());
    setDoc(listItem, {
      bill: newItem.bill,
      description: newItem.description,
    })
      .then(() => {
        console.log("資料儲存進資料庫");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleDeleteItem = (id: number, bill: number) => {
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
};

export default AccountingPage;
