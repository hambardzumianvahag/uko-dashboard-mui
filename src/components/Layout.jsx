import React from "react";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Cards from "./Card";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Table from "./Table";

export default function Layout() {
  return (
    <div className="layout">
      <div>
        <Header />
      </div>
      <div className="main">
        <Dashboard />
        <Cards
          first="Revenue"
          second="$35,800"
          third="+10.23%"
          color="green"
          arrow={<ArrowUpwardIcon />}
        />
        <Cards
          first="Repeat Purchase"
          second="$12,900"
          third="+20.4%"
          color="green"
          arrow={<ArrowUpwardIcon />}
        />
        <Cards
          first="Average Order value"
          second="$1,000"
          third="+10.23%"
          color="red"
          arrow={<ArrowDownwardIcon />}
        />
        <Cards
          first="New Customers"
          second="143"
          third="+10.23%"
          color="red"
          arrow={<ArrowDownwardIcon />}
        />
      </div>
      <Table />
    </div>
  );
}
