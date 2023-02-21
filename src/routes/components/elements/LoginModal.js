import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Zoom from "@mui/material/Zoom";
import styles from "../css/home.module.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom timeout={1000} ref={ref} {...props} />;
});

function LoginModal(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const styled = {
    "&.MuiButton-text": {
      color: "white",
    },
  };
  // if (props.id === undefined) {
  // } else {
  //   console.log(props.id);
  //   console.log(props.username);
  //   console.log(props.avatar);
  // }

  return (
    <div className={styles.modal}>
      {props.id === undefined ? (
        <a
          id="login"
          href="https://discord.com/api/oauth2/authorize?client_id=1060823658832076830&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fauth%2Fdiscord&response_type=token&scope=identify"
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
            sx={{ borderRadius: 28 }}
            onClick={handleClickOpen}
          >
            <img
              src={`https://cdn.discordapp.com/avatars/${props.id}/${props.avatar}.jpg`}
              alt="my"
              width={"70px"}
            />
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            {/* <DialogTitle>Login</DialogTitle> */}
            <DialogContent>
              {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
              {/* <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Password"
                type="password"
                fullWidth
                variant="standard"
              /> */}
            </DialogContent>
            <DialogActions>
              {/* <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Login</Button> */}
            </DialogActions>
          </Dialog>
        </span>
        // <span className={styles.profile}>{props.username}님 안녕하세요!</span>
      )}
    </div>
  );
}

export default LoginModal;
