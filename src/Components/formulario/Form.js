import React, { Component } from "react";
import { Container, Header, Grid, Divider, Button } from "semantic-ui-react";
import Plantilla from "./Plantilla";
import Camposcomunes from "./Camposcomunes";
import Solicitante from "./Solicitante";

import "../../App.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plantillas: []
    };
  }

  opcionesGradoDeCriticidad = [
    { key: "af", value: "Critico", text: "Critico" },
    { key: "af", value: "Poco Critico", text: "Poco Critico" },
    { key: "af", value: "Medianamente Critico", text: "Medianamente Critico" }
  ];

  componentDidMount() {}

  render() {
    const { plantillas } = this.props;

    return (
      <React.Fragment>
        <Header
          as="h1"
          style={{
            marginTop: 40
          }}
        >
          Formulario de abastecimiento
        </Header>

        <Solicitante />
        <Divider />
        <Plantilla />
        <Divider />
        <Camposcomunes />

        <Grid style={{ marginTop: 40 }}>
          <Grid.Row>
            <Container
              textAlign="center"
              style={{
                marginTop: 60
              }}
            >
              <Button type="submit">Solicitar</Button>
            </Container>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Form;
