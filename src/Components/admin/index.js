import React, { useEffect } from "react";
import { withFirebase } from "../../Firebase";
import { Route, withRouter } from "react-router-dom";
import { compose } from "recompose";

const protectedRoute = ({ firebase, location, history, ...rest }) => {
  const handleResponse = currentUser => {
    if (!currentUser) {
      history.push({ pathname: "/login", state: { from: location.pathname } });
    }
  };

  useEffect(() => {
    firebase.auth.onAuthStateChanged(handleResponse);
  });

  return <Route {...rest} />;
};

export default compose(
  withRouter,
  withFirebase
)(protectedRoute);
