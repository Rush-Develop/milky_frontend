import styles from "../components/home.module.css";
import Menu from "./Menu";
import Login from "./LoginModal";
import { useMediaQuery } from "react-responsive";
import Sidebar from "./Sidebar";
import Sidemenu from "./Sidemenu";

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:981px)",
  });
  return <>{isMobile && children}</>;
};

export const Pc = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width:980px)",
  });
  return <>{isPc && children}</>;
};

function Header() {
  return (
    <>
      <Mobile>
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
          <Sidebar width={360}>
            <Sidemenu />
          </Sidebar>
        </div>
      </Mobile>
      <Pc>
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
        </div>
      </Pc>
    </>
  );
}

export default Header;
