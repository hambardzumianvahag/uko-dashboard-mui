import React, { useState } from "react";
import CreateTask from "./CreateTask";
import Todo from "./Todo";
import Done from "./Done";
import InProgress from "./InProgress";

export default function Trello() {
  const [todo, setTodo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);

  const moveTaskToInProgress = (taskIndex) => {
    const taskToMove = todo[taskIndex];
    const updatedTodo = todo.filter((_, index) => index !== taskIndex);

    setTodo(updatedTodo);
    setInProgress([...inProgress, taskToMove]);
  };

  const prevTaskToTodo = (taskIndex) => {
    const taskToMove = inProgress[taskIndex];
    const updatedInProgress = inProgress.filter(
      (_, index) => index !== taskIndex
    );
    setInProgress(updatedInProgress);
    setTodo([...todo, taskToMove]);
  };
  const moveTaskToDone = (taskIndex) => {
    const taskToMove = inProgress[taskIndex];
    const updatedTodo = inProgress.filter((_, index) => index !== taskIndex);

    setInProgress(updatedTodo);
    setDone([...done, taskToMove]);
  };

  const prevTaskToInProgress = (taskIndex) => {
    const taskToMove = done[taskIndex];
    const updatedInProgress = done.filter((_, index) => index !== taskIndex);
    setDone(updatedInProgress);
    setInProgress([...inProgress, taskToMove]);
  };
  return (
    <div className="trello">
      <div>
        <CreateTask todo={todo} setTodo={setTodo} />
      </div>
      <div className="tasks">
        <div className="task">
          <h3>To Do</h3>
          {todo && todo.length > 0 ? (
            <Todo todo={todo} moveTaskToInProgress={moveTaskToInProgress} />
          ) : null}
        </div>
        <div className="task">
          <h3>In Progress</h3>
          {inProgress && inProgress.length > 0 ? (
            <InProgress
              inProgress={inProgress}
              prevTaskToTodo={prevTaskToTodo}
              moveTaskToDone={moveTaskToDone}
            />
          ) : null}
        </div>
        <div className="task">
          <h3>Done</h3>
          {done && done.length > 0 ? (
            <Done done={done} prevTaskToInProgress={prevTaskToInProgress} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
