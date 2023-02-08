import styles from "../components/home.module.css";

function Section({ cnt }) {
  return <div className={styles.section}>Section{cnt}</div>;
}

export default Section;
