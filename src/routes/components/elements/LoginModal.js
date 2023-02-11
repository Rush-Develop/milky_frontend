import React, { useEffect, useState } from "react";
import styles from "../css/home.module.css";
import Modal from "react-modal";

function LoginModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  console.log("렌더링");
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
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
            left: "400px",
            right: "400px",
            bottom: "300px",
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
        <p className={styles.Modal}>
          <form style={{ textAlign: "center", paddingTop: "50px" }}>
            <p className={styles.UI}>
              <input
                type="text"
                id="email"
                placeholder="Enter email"
                value={state.email}
                onChange={handleChange}
              />
            </p>
            <p className={styles.UI}>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={state.password}
                onChange={handleChange}
              />
            </p>
            <p className={styles.UI}>
              <input type="submit" value="Login" />
            </p>
          </form>
        </p>
      </Modal>
    </>
  );
}

export default LoginModal;
