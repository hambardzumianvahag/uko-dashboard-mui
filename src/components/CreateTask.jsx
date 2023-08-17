import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, TextareaAutosize } from "@mui/material";
import BasicSelect from "./Select";

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
};

const buttonStyle = {
  marginBottom: "1rem",
};

const modalContentStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const textFieldStyle = {
  width: "100%",
  marginTop: "10px",
};

export default function CreateTask({ setResult, result }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [user, setUser] = React.useState("");
  const [taskName, setTaskName] = React.useState("");
  const [taskDesc, setTaskDesc] = React.useState("");
  const [selectedUser, setSelectedUser] = React.useState(null);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((r) => setUser(r));
  }, []);

  const createTaskButtonStyle = {
    marginTop: "1rem",
    alignSelf: "flex-end",
  };
  const handleName = (e) => {
    setTaskName(e.target.value);
  };
  const handleDesc = (e) => {
    setTaskDesc(e.target.value);
  };
  const handleSubmit = () => {
    const newTask = {
      taskName: taskName,
      taskDesc: taskDesc,
      assignTo: selectedUser,
    };

    setResult([...result, newTask]);
    handleClose();
    setTaskName("");
    setTaskDesc("");
    setSelectedUser(null);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleOpen} style={buttonStyle}>
        Create New Task
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="task-modal" sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Create New Task
          </Typography>
          <div style={modalContentStyle}>
            <TextField
              id="outlined-basic"
              label="Task Name"
              variant="outlined"
              style={textFieldStyle}
              onChange={handleName}
            />
            <TextareaAutosize
              className="text-area"
              placeholder="Task Description"
              onChange={handleDesc}
            />
            <BasicSelect
              user={user}
              setSelectedUser={setSelectedUser}
              selectedUser={selectedUser}
            />
            <Button
              onClick={() => {
                handleClose();
                handleSubmit();
              }}
              className="create-btn"
              variant="outlined"
              style={createTaskButtonStyle}
            >
              Create
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
