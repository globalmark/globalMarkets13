/* eslint-disable @next/next/no-html-link-for-pages */
import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Global Market</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ir a <a href="/contac">CONTAC</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>
      </main>
    </div>
  );
};

export default Home;
