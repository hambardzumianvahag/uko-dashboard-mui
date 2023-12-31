import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export default function SignIn({ switchTrello, first, setFirst }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    setFirst(localStorage.getItem('user login'));
  };
  const handleClose = () => setOpen(false);

  const handleLogin = (event) => {
    setLogin(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleOpen();
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={handleLogin}
          id="outlined-basic"
          label="Login"
          variant="outlined"
          style={{ marginBottom: "1rem", width: "250px" }} // Adjust width
        />
        <TextField
          onChange={handlePassword}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          style={{ marginBottom: "1rem", width: "250px" }} // Adjust width
        />
        <Button type="submit" variant="outlined">
          Enter
        </Button>
      </form>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {login !== localStorage.getItem("user login") &&
            password === localStorage.getItem("user password")
              ? "Failed Login"
              : login === localStorage.getItem("user login") &&
                password !== localStorage.getItem("user password")
              ? "Failed Password"
              : login !== localStorage.getItem("user login") &&
                password !== localStorage.getItem("user password")
              ? "Failed Both"
              : "Success"}
          </Typography>
          {login === localStorage.getItem("user login") &&
            password === localStorage.getItem("user password") && (
              <Button onClick={switchTrello} variant="outlined">
                Switch Trello
              </Button>
            )}
        </Box>
      </Modal>
    </div>
  );
}
