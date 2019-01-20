import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

const Login = ({ inputPass }) => (
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
    <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">
          Admin Abastecimiento
        </Header>
        <Form size="large" onSubmit={inputPass}>
          <Segment>
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Contraseña"
              type="password"
              onChange={(e, { value }) => inputPass(value)}
            />
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
);

export default Login;
