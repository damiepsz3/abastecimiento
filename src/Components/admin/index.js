import React, { useState, useEffect } from "react";
import { withFirebase } from "../../Firebase";
import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const protectedRoute = ({ firebase, component: Component, ...rest }) => {
  const { initialising, user } = useAuthState(firebase.auth);
  if (initialising === true) return <div>Loading</div>;
  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

const Wrapper = {};
export default withFirebase(protectedRoute);
