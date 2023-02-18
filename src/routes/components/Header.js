import styles from "../components/css/home.module.css";
import Menu from "./elements/Menu";
import LoginModal from "./elements/LoginModal";
import { useMediaQuery } from "react-responsive";
import Sidebar from "./elements/Sidebar";
import Sidemenu from "./elements/Sidemenu";
import React, { useEffect, useState } from "react";
// import DiscordLogin from "./elements/DiscordLogin";

export const Small = ({ children }) => {
  const isSmall = useMediaQuery({
    query: "(max-width:981px)",
  });
  return <>{isSmall && children}</>;
};

export const Big = ({ children }) => {
  const isBig = useMediaQuery({
    query: "(min-width:980px)",
  });
  return <>{isBig && children}</>;
};

function Header() {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  // const [modalOpen, setModalOpen] = useState(false);

  // const openModal = () => {
  //   setModalOpen(true);
  // };
  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  return (
    <>
      <Small>
        <div className={styles.Header}>
          {/* <img
        className={styles.Logo}
        src="assets/img/logo.jpeg"
        alt="logo"
        style={{
          width: 100,
          height: 75,
          margin: 0,
          padding: 0,
        }}
      /> */}
          <span className={styles.Logo}>Logo</span>
          <LoginModal />
          {/* <DiscordLogin /> */}
          <Sidebar width={360}>
            <Sidemenu />
          </Sidebar>
        </div>
      </Small>
      <Big>
        <div className={styles.Header}>
          {/* <img
        className={styles.Logo}
        src="assets/img/logo.jpeg"
        alt="logo"
        style={{
          width: 100,
          height: 75,
          margin: 0,
          padding: 0,
        }}
      /> */}
          <span className={styles.Logo}>Logo</span>
          <Menu />
          <LoginModal />
          {/* <DiscordLogin /> */}
        </div>
      </Big>
    </>
  );
}

export default Header;
