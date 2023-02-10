import { useEffect, useState } from "react";
import styles from "./components/css/home.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";

function Home() {
  return (
    <div>
      <Header />
      <div className={styles.grid}>
        <div className={styles.Main}>
          <div id="1">
            <Section cnt="1" />
          </div>
          <div id="2">
            <Section cnt="2" />
          </div>
          <div id="3">
            <Section cnt="3" />
          </div>
          <div id="4">
            <Section cnt="4" />
          </div>
        </div>
        <div className={styles.Footer}>Footer</div>
      </div>
    </div>
  );
}
export default Home;
