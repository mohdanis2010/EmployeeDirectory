import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import HomePage from "./Containers/HomePage";
import EmployeePage from "./Containers/EmployeePage";

render(
  <Router history={browserHistory}>
    <Route>
      <Route path="/" component={HomePage} />
      <Route path="/:employeeName" component={EmployeePage} />
    </Route>
  </Router>,
  document.getElementById("root"),
);
