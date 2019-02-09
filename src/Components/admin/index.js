import React, { Component } from "react";

import Login from "./Login";
import Nav from "./Nav";
class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: ""
    };
  }

  inputPass = password => {
    this.setState({ password });
  };

  render() {
    const { password } = this.state;
    if (password !== "") return <Login inputPass={this.inputPass} />;
    return <Nav />;
  }
}

export default Admin;
