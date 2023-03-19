import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Zoom from "@mui/material/Zoom";
import { GithubPicker } from "react-color";
import styles from "../css/home.module.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom timeout={1000} ref={ref} {...props} />;
});

function LoginModal() {
  const [open, setOpen] = useState(false);
  const [pallete, setPallete] = useState(false);
  const [id, setId] = useState(null);
  const [username, setUsername] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [goon, setGoon] = useState(null);
  const [age, setAge] = useState(null);
  const [point, setPoint] = useState(null);
  const [profilecolor, setProfilecolor] = useState("#fff");

  useEffect(() => {
    fetch("/api/logininfo")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        console.log(JSON.stringify(data));
        if (data.goon == null || data.age == null) {
          setOpen(true);
        }
        setId(data.id);
        setUsername(data.name);
        setAvatar(data.avatar);
        setGoon(data.goon);
        setAge(data.age);
        setPoint(data.point);
        setProfilecolor(data.pcolor);
      })
      .catch((error) => {
        console.log(`error: ${error}`);
      });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
    if (pallete == true) {
      setPallete(!pallete);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlepalleteOpen = () => {
    setPallete(!pallete);
  };

  const handleChangeComplete = (color, event) => {
    setProfilecolor(color.hex);
  };

  const handleSummit = (event) => {
    event.preventDefault();
    console.log(profilecolor);
    const userdata = {
      id: id,
      name: username,
      age: age,
      goon: goon,
      pcolor: profilecolor,
    };
    console.log(userdata);
    fetch(`/api/member/update/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    })
      .then((response) => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error("에러 발생!");
      })
      .catch((error) => {
        alert(error);
      })
      .then((data) => {
        console.log(data);
      });
    handleClose();
  };

  const handleChange = (e, type) => {
    const value = e.target.value;
    if (type === "username") {
      setUsername(value);
    } else if (type === "age") {
      setAge(value);
    } else {
      setGoon(value);
    }
  };

  const setEmotion = (goon) => {
    console.log(goon);
    if (goon === "0") {
      return "🏆";
    } else if (goon === "1") {
      return "👑";
    } else if (goon === "2") {
      return "🌈";
    } else if (goon === "3") {
      return "💫";
    } else if (goon === "4") {
      return "⭐";
    } else {
      return "💎";
    }
  };

  const styled = {
    "&.MuiButton-text": {
      color: "black",
    },
  };

  return (
    <div className={styles.headprofile}>
      {id === null ? (
        <a
          id="login"
          href="http://localhost:8080/oauth2/authorization/discord"
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
              src={`https://cdn.discordapp.com/avatars/${id}/${avatar}.jpg`}
              alt="my"
              width={"70px"}
            />
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <DialogContent style={{ width: "450px", padding: "0" }}>
              <header
                className={styles.header}
                style={{ backgroundColor: profilecolor }}
              >
                <Button
                  variant="text"
                  // className={styles.pallete}
                  sx={{ position: "absolute", right: "0", color: "white" }}
                  onClick={handlepalleteOpen}
                >
                  🛠️
                </Button>
                {pallete ? (
                  <div
                    style={{
                      position: "absolute",
                      right: "0",
                      top: "35px",
                      // border: "2px solid red",
                      transition: "all 2s",
                    }}
                  >
                    <GithubPicker
                      triangle="hide"
                      onChangeComplete={handleChangeComplete}
                    />
                  </div>
                ) : (
                  <div></div>
                )}
                <img
                  className={styles.profileimg}
                  src={`https://cdn.discordapp.com/avatars/${id}/${avatar}.jpg`}
                  alt="my"
                  width={"70px"}
                />
              </header>
              <h1 className={styles.boldtext}>
                <p
                  style={{
                    position: "absolute",
                    left: "145px",
                    top: "210px",
                    // border: "1px solid red",
                  }}
                >
                  {setEmotion(goon)}
                </p>
                <TextField
                  id="standard_search"
                  onChange={(e) => handleChange(e, "username")}
                  InputProps={{
                    inputProps: {
                      style: { textAlign: "center" },
                    },
                  }}
                  label="닉네임"
                  defaultValue={username}
                  variant="standard"
                  sx={{
                    width: 100,
                    textAlign: "center",
                  }}
                />
              </h1>
              <div className={styles.socialcontainer}>
                <h1 className={styles.boldtext}>
                  <FormControl
                    variant="standard"
                    sx={{
                      minWidth: 100,
                      minHeight: 0,
                      // border: "1px solid red",
                    }}
                  >
                    <InputLabel>군</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={goon}
                      onChange={(e) => handleChange(e, "goon")}
                      label="Age"
                    >
                      <MenuItem value={"0"}>대회팀</MenuItem>
                      <MenuItem value={"1"}>주력</MenuItem>
                      <MenuItem value={"2"}>정예</MenuItem>
                      <MenuItem value={"3"}>1군</MenuItem>
                      <MenuItem value={"4"}>2군</MenuItem>
                      <MenuItem value={"5"}>아이템</MenuItem>
                    </Select>
                  </FormControl>
                </h1>
                <h1 className={styles.boldtext}>
                  <TextField
                    InputProps={{
                      inputProps: {
                        style: { textAlign: "Center" },
                      },
                    }}
                    id="standard-search"
                    label="나이"
                    onChange={(e) => handleChange(e, "age")}
                    defaultValue={age}
                    variant="standard"
                    sx={{
                      width: 100,
                      textAlign: "center",
                      // border: "1px solid red",
                    }}
                  />
                  {/* <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                    sx={{
                      width: 100,
                      textAlign: "center",
                    }}
                  /> */}
                </h1>
                <h1 className={styles.boldtext}>
                  <TextField
                    id="standard-search"
                    label="포인트"
                    defaultValue={point}
                    variant="standard"
                    InputProps={{
                      readOnly: true,
                      inputProps: {
                        style: { textAlign: "Center" },
                      },
                    }}
                    sx={{
                      width: 100,
                      textAlign: "center",
                    }}
                  />
                </h1>
              </div>
            </DialogContent>
            <DialogActions>
              {/* <Button onClick={handleClose}>Cancel</Button> */}
              <Button onClick={handleSummit}>수정완료</Button>
            </DialogActions>
          </Dialog>
        </span>
      )}
    </div>
  );
}

export default LoginModal;
