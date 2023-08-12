import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@mui/material";

export default function SignUp({ switchTab }) {
  const [login, setLogin] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [match, setMatch] = useState(true);

  const handleLogin = (event) => {
    setLogin(event.target.value);
  };
  const handlePassword1Change = (event) => {
    const newPassword = event.target.value;
    setPassword1(newPassword);
    setMatch(password2 === newPassword);
  };
  const handlePassword2Change = (event) => {
    const newPassword = event.target.value;
    setPassword2(newPassword);
    setMatch(password1 === newPassword);
  };

  const handleBtnChange = () => {
    if (!match) {
      alert("Passwords do not match");
    } else if (!login) {
      alert("Enter valid Login");
    } else {
      localStorage.setItem("user login", login);
      localStorage.setItem("user password", password2);
    }
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        value={login}
        onChange={handleLogin}
        id="outlined-basic"
        label="Login"
        variant="outlined"
      />{" "}
      <br />
      <TextField
        value={password1}
        onChange={handlePassword1Change}
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />{" "}
      <br />
      <TextField
        id="outlined-password-input"
        value={password2}
        onChange={handlePassword2Change}
        label="Password"
        type="password"
        autoComplete="current-password"
      /> <br />
	  <Button onClick={()=> {handleBtnChange(); switchTab()}} variant="outlined">Enter</Button>
    </Box>
  );
}
