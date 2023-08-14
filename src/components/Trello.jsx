import React from "react";
import CreateTask from "./CreateTask";

export default function Trello() {
  return (
    <div className="trello">
      <div>
        <CreateTask />
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
