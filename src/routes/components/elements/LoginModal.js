import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import styles from "../css/home.module.css";

function LoginModal(props) {
  const styled = {
    "&.MuiButton-text": {
      color: "white",
    },
  };
  if (props.id === undefined) {
  } else {
    console.log(props.id);
    console.log(props.username);
    console.log(props.avatar);
  }

  return (
    <div className={styles.modal}>
      {props.id === undefined ? (
        <a
          id="login"
          href="https://discord.com/api/oauth2/authorize?client_id=1060823658832076830&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=token&scope=identify"
          style={{ textDecoration: "none" }}
        >
          <Button variant="text" sx={styled}>
            Log-in
          </Button>
        </a>
      ) : (
        <span className={styles.profile}>
          <Button
            variant="contained"
            className={styles.button}
            sx={{ borderRadius: 50 }}
          >
            <img
              src={`https://cdn.discordapp.com/avatars/${props.id}/${props.avatar}.jpg`}
              alt="my"
              width={"70px"}
            />
          </Button>
        </span>
        // <span className={styles.profile}>{props.username}님 안녕하세요!</span>
      )}
    </div>
  );
}

export default LoginModal;
