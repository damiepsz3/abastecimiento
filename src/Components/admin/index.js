import React from "react";
import { withFirebase } from "../../Firebase";
import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const protectedRoute = ({ firebase, component: Component, ...rest }) => {
  const { initialising, user } = useAuthState(firebase.auth);
  if (initialising) return <div>Loading</div>;

  return (
    <Route
      {...rest}
      render={
        props => {
          if (user) if (!user.isAnonymous) return <Component {...props} />;
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          );
        }

        // user ? (
        //   <Component {...props} />
        // ) : (
        //   <Redirect
        //     to={{
        //       pathname: "/login",
        //       state: { from: props.location }
        //     }}
        //   />
        // )
      }
    />
  );
};

export default withFirebase(protectedRoute);
