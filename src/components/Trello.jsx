import React, { useState } from "react";
import CreateTask from "./CreateTask";
import Tasks from "./Tasks";

export default function Trello() {
  const [result, setResult] = useState({
    taskName: "",
    taskDesc: "",
    assignTo: "",
  });
  return (
    <div className="trello">
      <div>
        <CreateTask result={result} setResult={setResult}/>
      </div>
      <div className="tasks">
        <div className="task">
          <h1>To Do</h1>
          <Tasks result={result}/>
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
