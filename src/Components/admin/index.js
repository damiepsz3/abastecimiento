import React, { useState, useEffect } from "react";
import Login from "./Login";
import Nav from "./Nav";
import { withFirebase } from "../../Firebase";

const Admin = ({ firebase }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    firebase.auth.onAuthStateChanged(authUs => {
      authUs ? setAuthUser(authUs) : setAuthUser(null);
    });
  });
  console.log(authUser);
  if (authUser) return <Nav />;
  return <Login />;
};

// class Admin extends Component {
//
//
//
//
//   render() {
//     const { password } = this.state;
//     if (password !== "Mundial78") return <Login inputPass={this.inputPass} />;
//     return <Nav />;
//   }
// }

export default withFirebase(Admin);
