import { useEffect, useState } from "react";
import styles from "../css/home.module.css";
import Modal from "react-modal";

function LoginModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setModalIsOpen(true)} className={styles.Login}>
        로그인
      </button>
      <Modal
        closeTimeoutMS={200}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
          content: {
            position: "absolute",
            top: "200px",
            left: "200px",
            right: "200px",
            bottom: "200px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
            border: "1px solid red",
          },
        }}
      >
        <button onClick={() => setModalIsOpen(false)} className={styles.Login}>
          로그인
        </button>
        <p className={styles.Modal}>hello</p>
      </Modal>
    </>
  );
}

export default LoginModal;
