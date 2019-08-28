import React, { Component } from "react";

export default class EmployeeListItem extends Component {
  render() {
    return (
      <div style={Style.container}>
        <div style={{ "margin-top": "230px" }}>
          {this.props.employeeRole && (
            <div>
              <span style={Style.roleCls}>Employee Role:</span>
              <span style={Style.roleContentCls}>
                {this.props.employeeRole}
              </span>
            </div>
          )}
          {this.props.employee && (
            <div>
              <div style={Style.StyleSubordinates}>
                {" "}
                Employee Direct subordinates{" "}
              </div>
              <ul style={Style.ulCls}>
                {this.props.employee.map(data => (
                  <li style={Style.liCls} key={data}>
                    {data}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}
const Style = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    maxWidth: "1280px",
    marginTop: 50,
  },
  ulCls: {
    listStyle: "square",
    paddingLeft: "30px",
    fontSize: "18px",
  },
  liCls: {
    margin: "5px",
    backgroundColor: "lightyellow",
  },
  heading: {
    fontSize: "18px",
  },
  roleCls: {
    display: "inline-block",
    fontSize: "18px",
    marginRight: "7px",
    fontWeight: "bold",
  },
  roleContentCls: {
    display: "inline-block",
    fontSize: "15px",
    fontWeight: "bold",
  },
  StyleSubordinates: {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: 10,
  },
};
