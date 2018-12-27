import React, { Component } from "react";
import { Container, Header, Grid, Button } from "semantic-ui-react";
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
      plantillaSeleccionada: "",
      conoceCodigo: null
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

  handleConoceCodigo = conoceCodigo => {
    this.setState({ conoceCodigo: conoceCodigo });
  };

  render() {
    const {
      plantillaSeleccionada,
      plantillas,
      loadingPlantillas,
      conoceCodigo
    } = this.state;

    return (
      <React.Fragment>
        <Header as="h1" style={{ marginTop: 40 }}>
          Formulario de abastecimiento
        </Header>

        <Solicitante />

        <PreguntaNumero
          conoceCodigo={conoceCodigo}
          handleCodigo={this.handleConoceCodigo}
        />

        {this.state.conoceCodigo === "Si" && <NumeroMaterial />}
        {this.state.conoceCodigo === "No" && (
          <Plantilla
            data={plantillas}
            selectPlantilla={this.seleccionarPlantilla}
            plantillaSeleccionada={plantillaSeleccionada}
            loading={loadingPlantillas}
          />
        )}

        <CamposDinamicos plantillaSeleccionada={plantillaSeleccionada} />

        {this.state.conoceCodigo !== null && <Camposcomunes />}

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
