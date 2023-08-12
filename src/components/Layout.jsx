import React, { useState } from "react";
import Header from "./Header";
import Dashboard from "./Dashboard";
export default function Layout() {
  const [first, setFirst] = useState("");
  return (
    <div className="layout">
      <div>
        <Header first={first} />
      </div>
      <div className="main">
        <Dashboard first={first} setFirst={setFirst} />
      </div>
    </div>
  );
}
