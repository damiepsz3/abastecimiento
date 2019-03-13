import React from "react";
import { withFirebase } from "../../Firebase";
import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { Loader, Grid } from "semantic-ui-react";

const protectedRoute = ({ firebase, component: Component, ...rest }) => {
  const { initialising, user } = useAuthState(firebase.auth);
  if (initialising)
    return (
      <div className="login-form">
        {/*
    Heads up! The styles below are necessary for the correct render of this example.
    You can do same with CSS, the main idea is that all the elements up to the `Grid`
    below must have a height of 100%.
  */}
        <style>{`
body > div,
body > div > div,
body > div > div > div.login-form {
height: 100%;
}
`}</style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Loader active size="big" />
          </Grid.Column>
        </Grid>
      </div>
    );

  return (
    <Route
      {...rest}
      render={props => {
        if (user) if (!user.isAnonymous) return <Component {...props} />;
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        );
      }}
    />
  );
};

export default withFirebase(protectedRoute);
