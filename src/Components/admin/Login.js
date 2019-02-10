import React, { useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { compose } from "recompose";
import {
  Form,
  Grid,
  Header,
  Segment,
  Button,
  Message
} from "semantic-ui-react";
import { withFirebase } from "../../Firebase";

const Login = ({ firebase, history, location }) => {
  const [currentUser, setCurrentUser] = useState(firebase.auth.currentUser);
  const [pass, setPass] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = () => {
    console.log(pass);
    setError(null);
    firebase
      .doSignInWithEmailAndPassword("damiepsz3@gmail.com", pass)
      .then(() => {
        setPass(null);
      })
      .catch(setError);
  };

  useEffect(() => {
    if (firebase.auth.currentUser) {
      setCurrentUser(true);
    }
  });
  if (currentUser)
    return (
      <Redirect
        to={location.state.from ? location.state.from : "/admin/procesadas"}
      />
    );
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
          <Header as="h2" textAlign="center">
            Admin Abastecimiento
          </Header>
          <Form size="large">
            <Segment>
              <Form.Input
                required
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Contraseña"
                type="password"
                onChange={(e, { value }) => setPass(value)}
              />

              <Button fluid onClick={() => onSubmit()}>
                Ingresar
              </Button>
            </Segment>
          </Form>
          {error && (
            <Message attached="bottom" negative>
              {error.message ===
              "The password is invalid or the user does not have a password."
                ? "Contraseña Incorrecta"
                : error.message}
            </Message>
          )}
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default compose(
  withRouter,
  withFirebase
)(Login);
