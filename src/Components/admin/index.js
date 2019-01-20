import React, { Component } from "react";

import Login from "./Login";

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
    if (password !== "Mundial78") return <Login inputPass={this.inputPass} />;
    return <div>Cards</div>;
  }
}

export default Admin;
