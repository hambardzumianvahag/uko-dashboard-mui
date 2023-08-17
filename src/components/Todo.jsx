import React from "react";
import Task from "../Task";

export default function Todo({result}) {
  return (
    <div> 
      <Task result={result} />
    </div>
  );
}
