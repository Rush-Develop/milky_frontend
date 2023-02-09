import styles from "../components/home.module.css";
import Menu from "./Menu";

function Header() {
  return (
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
      Logo
      {/* <Menu /> */}
    </div>
  );
}

export default Header;
