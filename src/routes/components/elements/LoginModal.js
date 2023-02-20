import * as React from "react";
import Button from "@mui/material/Button";
import styles from "../css/home.module.css";

function LoginModal(props) {
  const styled = {
    "&.MuiButton-text": {
      color: "white",
    },
  };
  if (props.id === undefined) {
    console.log("없다 ");
  } else {
    console.log(props.id);
    console.log(props.username);
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
        props.username
      )}
    </div>
  );
}

export default LoginModal;
