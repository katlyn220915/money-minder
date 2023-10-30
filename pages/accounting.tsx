import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { ListItemProps } from "../types";
import app from "../app/firebase";
import { getAuth, User, onAuthStateChanged } from "firebase/auth";
import { redirect } from "react-router-dom";
import {
  collection,
  doc,
  getFirestore,
  setDoc,
  getDocs,
  query,
  deleteDoc,
} from "firebase/firestore";

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
  const [email, setEmail] = useState<string>("");
  const db = getFirestore(app);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const auth = await getAuth(app);

      onAuthStateChanged(auth, async (currentUser) => {
        if (currentUser === null) {
          console.log("here");
          router.push("/");
          return;
        }
        try {
          const getList = await getBillList(currentUser.email);
          setList(getList);
          setEmail(currentUser.email);
          const newTotalAmount = getList.reduce((acc, currentItem) => {
            return acc + Number(currentItem.bill);
          }, 0);
          setTotalAmount(newTotalAmount);
        } catch {
          redirect("/");
        }
      });
    };
    fetchData();
  }, []);

  const getBillList = async (email: string) => {
    const q = query(collection(db, `user/${email}/list`));
    const querySnapshot = await getDocs(q);
    let list = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      const data = doc.data();
      console.log(typeof data);
      list.push(data);
    });
    return list;
  };

  const handleAddRecord = async (newItem: ListItemProps) => {
    setList((prevList) => [...prevList, newItem]);
    setTotalAmount(totalAmount + Number(newItem.bill));
    const userEmail = await getUserEmail();
    const listCollection = collection(db, `user/${userEmail}/list`);
    const docRef = doc(listCollection, newItem.id.toString());
    setDoc(docRef, {
      id: newItem.id,
      bill: newItem.bill,
      description: newItem.description,
    })
      .then(() => {
        console.log("成功");
      })
      .catch(() => {
        console.log("失敗");
      });
  };

  async function getUserEmail() {
    const auth = await getAuth(app);
    const userEmail = await auth.currentUser.email;
    return userEmail;
  }

  async function handleDeleteItem(id: number, bill: number) {
    console.log(id);
    const userEmail = await getUserEmail();
    console.log(userEmail);
    const docRef = doc(db, `/user/${userEmail}/list`, id.toString());
    deleteDoc(docRef)
      .then(() => {
        console.log("成功刪除");
      })
      .catch((error) => {
        console.error(error);
      });

    setList((preList) => preList.filter((list) => list.id !== id));
    if (totalAmount !== 0) {
      setTotalAmount(totalAmount - Number(bill));
    }
  }

  return (
    <Layout>
      <Head>
        <title>開始記帳囉！</title>
        <meta name="description" content="你今天記帳了吗？快快來記帳！" />
        <link rel="icon" href="/img/favicon.png"></link>
      </Head>
      <main>
        <SectionAccounting email={email} onAddRecord={handleAddRecord} />
        <BillList list={list} onDeleteItem={handleDeleteItem} />
        <Total totalAmount={totalAmount} />
        <ButtonBackhome>返回首頁</ButtonBackhome>
      </main>
    </Layout>
  );
};

export default AccountingPage;
