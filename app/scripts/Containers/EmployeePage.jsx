import React, { Component } from "react";
import { get } from "lodash";
import Service from "../Service";
import EmployeeListItem from "../Component/EmployeeListItem";

export default class EmployeePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {},
    };
  }

  componentDidMount() {
    const {
      params: { employeeName },
    } = this.props;
    Service.findEmp(employeeName).then(employee =>
      this.setState({ employee: employee }),
    );
  }

  render() {
    console.log("Subordinates", this.state.employee);
    const data = get(this.state.employee[1], "direct-subordinates");
    const role = this.state.employee[0];

    return (
      <div className="page">
        <EmployeeListItem key={data} employee={data} employeeRole={role} />
      </div>
    );
  }
}
