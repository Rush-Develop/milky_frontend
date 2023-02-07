import styles from "../components/home.module.css";

function Header() {
  return (
    <div className={styles.Header}>
      <img
        src="assets/img/logo.jpeg"
        alt="logo"
        style={{ width: 200, height: 150, margin: 0, padding: 0 }}
      />
    </div>
  );
}

export default Header;
