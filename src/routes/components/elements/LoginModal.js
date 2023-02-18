import * as React from "react";
import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import Zoom from "@mui/material/Zoom";
import styles from "../css/home.module.css";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Zoom timeout={1000} ref={ref} {...props} />;
// });

function LoginModal() {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const styled = {
    "&.MuiButton-text": {
      color: "white",
    },
  };

  return (
    <div className={styles.modal}>
      <a
        id="login"
        href="https://discord.com/api/oauth2/authorize?client_id=1060823658832076830&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=token&scope=identify"
        style={{ textDecoration: "none" }}
      >
        <Button variant="text" sx={styled}>
          Log-in
        </Button>
      </a>
      {/* <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle>Log-in</DialogTitle>
        <DialogContent>
          <TextField
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
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Login</Button>
        </DialogActions>
      </Dialog> */}
    </div>
  );
}

export default LoginModal;
