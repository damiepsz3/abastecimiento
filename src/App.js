import React, { Component } from "react";
import {
  Container,
  Header,
  Grid,
  Input,
  Divider,
  Button,
  Segment
} from "semantic-ui-react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plantillas: []
    };
  }

  componentDidMount() {}

  render() {
    const { plantillas } = this.state;

    return (
      <Container>
        <Header as="h1" style={{ marginTop: 40 }}>
          Formulario de abastecimiento
        </Header>
        <Grid style={{ marginTop: 40 }}>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h4">Nombre y Apellido</Header>
              <Input fluid control="input" placeholder="Nombre y Apellido" />
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as="h4">Email</Header>
              <Input fluid control="input" placeholder="Email" />
            </Grid.Column>
          </Grid.Row>
          <Divider />
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h4">Seleccione Categoría</Header>
              <Segment.Group>
                <Segment>Content</Segment>
                <Segment>Content</Segment>
                <Segment>Content</Segment>
                <Segment>Content</Segment>
              </Segment.Group>
            </Grid.Column>
            <Grid.Column width={8}>
              {plantillas.length !== 0 && (
                <Segment.Group>
                  <Segment>Content</Segment>
                  <Segment>Content</Segment>
                  <Segment>Content</Segment>
                  <Segment>Content</Segment>
                </Segment.Group>
              )}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Container textAlign="center" style={{ marginTop: 60 }}>
              <Button type="submit">Solicitar</Button>
            </Container>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
