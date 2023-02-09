import { useEffect, useState } from "react";
import Movie from "./Movie";
import Sidebar from "./components/Sidebar";
import styles from "./components/home.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Sidemenu from "./components/Sidemenu";

function Home() {
  return (
    <div>
      <Sidebar width={360}>
        <Sidemenu />
      </Sidebar>
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
