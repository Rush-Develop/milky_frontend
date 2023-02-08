import { useEffect, useState } from "react";
import Movie from "./Movie";
import Sidebar from "./components/Sidebar";
import styles from "./components/home.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";

function Home() {
  return (
    <div>
      <Sidebar width={360} />
      <div className={styles.grid}>
        <Header />
        <div className={styles.Main}>
          <Section cnt="1" />
          <Section cnt="2" />
        </div>
        <div className={styles.Footer}>Footer</div>
      </div>
    </div>
  );
}
export default Home;
