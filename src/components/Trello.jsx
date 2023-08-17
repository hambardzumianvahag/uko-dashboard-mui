import React, { useState } from "react";
import CreateTask from "./CreateTask";
import Todo from "./Todo";
import Done from "./Done";
import InProgress from "./InProgress";

export default function Trello() {
  const [result, setResult] = useState([]);
  const [todo, setTodo] = useState([]);
  // const [inProgress, setInProgress] = useState([]);

  return (
    <div className="trello">
      <div>
        <CreateTask
          result={result}
          setResult={setResult}
          todo={todo}
          setTodo={setTodo}
        />
      </div>
      <div className="tasks">
        <div className="task">
          <h3>To Do</h3>
          {result ? <Todo result={result} /> : null}
        </div>
        <div className="task">
          <h3>In Progress</h3>
          <InProgress />
        </div>
        <div className="task">
          <h3>Done</h3>
          <Done />
        </div>
      </div>
    </div>
  );
}
