import { Button } from "@mui/material";
import React from "react";

export default function Trello() {
  return (
    <div className="trello">
      <div>
        <Button variant="outlined">Create New Task</Button>
      </div>
      <div className="tasks">
        <div className="task">
          <h1>To Do</h1>
        </div>
        <div className="task">
          <h1>In Progress</h1>
        </div>
        <div className="task">
          <h1>Done</h1>
        </div>
      </div>
    </div>
  );
}
