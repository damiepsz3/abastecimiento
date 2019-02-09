import React, { useState } from "react";
import { Form, Grid, Header, Segment, Button } from "semantic-ui-react";
import { withFirebase } from "../../Firebase";

const Login = props => {
  const [user, setUser] = useState(null);
  const [pass, setPass] = useState(null);
  const [error, setError] = useState(null);
  console.log(props);
  const onSubmit = () => {
    props.firebase
      .doSignInWithEmailAndPassword(user, pass)
      .then(() => {
        setUser(null);
        setPass(null);
        //do redirect here
      })
      .catch(setError);
  };

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
          <Form size="large" onSubmit={onSubmit}>
            <Segment>
              <Form.Input
                required
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Correo Electrónico"
                type="email"
                onChange={(e, { value }) => setUser(value)}
              />
              <Form.Input
                required
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Contraseña"
                type="password"
                onChange={(e, { value }) => setPass(value)}
              />
              <Button fluid>Ingresar</Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default withFirebase(Login);
