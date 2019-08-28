import React, { Component } from "react";
import { get } from "lodash";
import Service from "../Service";
import SearchBar from "../Component/SearchBar";
import EmployeeListItem from "../Component/EmployeeListItem";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: this.props.searchKey,
      employees: {},
    };
    this.searchHandler = this.searchHandler.bind(this);
  }
  searchHandler(searchKey) {
    Service.findByName(searchKey).then(data =>
      this.setState({
        employees: data,
        searchKey: searchKey,
      }),
    );
  }
  render() {
    console.log("Subordinates", this.state.employee);
    const data = get(this.state.employees[1], "direct-subordinates");
    const role = this.state.employees[0];

    return (
      <div className="">
        <div>
          <SearchBar
            searchKey={this.state.searchKey}
            searchHandler={this.searchHandler}
          />
        </div>

        <EmployeeListItem key={data} employee={data} employeeRole={role} />
      </div>
    );
  }
}

HomePage.propTypes = {
  searchKey: React.PropTypes.string,
  employees: React.PropTypes.array,
};

HomePage.defaultProps = {
  searchKey: "",
  employees: [],
};
