import { useEffect, useState } from "react";
import Movie from "./Movie";
import Sidebar from "./components/Sidebar";
import styles from "./components/home.module.css";

function Home() {
  return (
    <div>
      <Sidebar width={300} />
      <div className={styles.grid}>
        <div className={styles.Header}>Header</div>
        <div className={styles.Main}>Main</div>
        <div className={styles.Footer}>Footer</div>
      </div>
    </div>
  );
}
export default Home;
