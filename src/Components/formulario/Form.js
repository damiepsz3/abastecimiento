import React, { Component } from "react";
import { Container, Header, Grid, Divider, Button } from "semantic-ui-react";
import GoogleApi from "../../GoogleApi";
import Plantilla from "./Plantilla";
import Camposcomunes from "./Camposcomunes";
import Solicitante from "./Solicitante";
import CamposDinamicos from "./CamposDinamicos";
import PreguntaNumero from "./PreguntaNumero";
import NumeroMaterial from "./NumeroMaterial";

import "../../App.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingPlantillas: true,
      plantillas: [],
      plantillaSeleccionada: ""
    };
  }

  componentDidMount() {
    GoogleApi.init().then(result =>
      this.setState({ plantillas: result, loadingPlantillas: false })
    );
  }

  seleccionarPlantilla = plantilla => {
    this.setState({ plantillaSeleccionada: plantilla });
  };

  render() {
    const { plantillaSeleccionada, plantillas, loadingPlantillas } = this.state;

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
        <PreguntaNumero />
        <NumeroMaterial />
        <Plantilla
          data={plantillas}
          selectPlantilla={this.seleccionarPlantilla}
          plantillaSeleccionada={plantillaSeleccionada}
          loading={loadingPlantillas}
        />
        <Divider />
        <CamposDinamicos plantillaSeleccionada={plantillaSeleccionada} />
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
