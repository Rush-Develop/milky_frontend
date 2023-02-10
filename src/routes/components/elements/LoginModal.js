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
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <button onClick={() => setModalIsOpen(false)} className={styles.Login}>
          로그인
        </button>
        <p className={styles.Modal}>hello</p>
      </Modal>
    </>
  );
}

export default LoginModal;
