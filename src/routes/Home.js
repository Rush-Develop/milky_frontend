import { useEffect, useState } from "react";
import Movie from "./Movie";
import Sidebar from "./components/Sidebar";
import styles from "./components/home.module.css";
import Header from "./components/Header";

function Home() {
  return (
    <div>
      <Sidebar width={300} />
      <div className={styles.grid}>
        <Header />
        <div className={styles.Main}>Main</div>
        <div className={styles.Footer}>Footer</div>
      </div>
    </div>
  );
}
export default Home;
