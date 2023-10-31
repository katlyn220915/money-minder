import React, { useState } from "react";
import Head from "next/head";
import { Layout, SiginSection, SiginForm } from "../components/index";

const Signin: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Money-minder 註冊、登入</title>
      </Head>
      <SiginSection></SiginSection>
    </Layout>
  );
};

export default Signin;
