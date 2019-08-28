import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.searchHandler = this.searchHandler.bind(this);
    this.state = {
      searchInput: "",
    };
  }

  searchHandler() {
    const { searchHandler } = this.props;
    searchHandler(this.state.searchInput);
  }

  handleChange(event) {
    this.setState({ searchInput: event.target.value });
  }

  render() {
    return (
      <div style={Style.container}>
        <input
          style={Style.inputBox}
          type="search"
          ref="searchKey"
          onChange={this.handleChange.bind(this)}
          value={this.state.searchInput}
        />
        <button
          style={Style.btnCls}
          onClick={this.searchHandler}
          disabled={this.state.searchInput === ""}>
          SEARCH
        </button>
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
  inputBox: {
    padding: "8px",
    fontSize: "16px",
    borderWidth: "1px",
    borderColor: "#CCCCCC",
    backgroundColor: "#FFFFFF",
    color: "#000000",
    borderStyle: "solid",
    marginRight: 16,
    borderRadius: "4px",
    width: "50%",
  },
  btnCls: {
    backgroundColor: "#44c767",
    borderRadius: "8px",
    border: "1px solid #18ab29",
    display: "inline-block",
    cursor: "pointer",
    color: "#ffffff",
    fontFamily: "Arial",
    fontSize: "17px",
    padding: "16px 31px",
    textDecoration: "none",
    width: "20%",
  },
};
