import type { NextPage } from "next";

import Head from "next/head";
import Nav from "../components/Nav/Nav";

import Header from "../components/Header/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hulu2.0</title>
        <link href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />

      {/* Result */}
    </div>
  );
};

export default Home;
