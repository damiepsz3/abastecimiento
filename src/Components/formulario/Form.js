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
      conoceCodigo: "",
      nombreApellido: "",
      email: "",
      numeroMaterial: ""
    };
  }

  componentDidMount() {
    GoogleApi.init().then(result =>
      this.setState({ plantillas: result, loadingPlantillas: false })
    );
  }

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const {
      plantillaSeleccionada,
      plantillas,
      loadingPlantillas,
      conoceCodigo,
      nombreApellido,
      email,
      numeroMaterial
    } = this.state;

    console.log(this.state);

    return (
      <React.Fragment>
        <Header as="h1" style={{ marginTop: 40 }}>
          Formulario de abastecimiento
        </Header>

        <Solicitante
          handleValorNombre={this.handleInputChange}
          nombreApellido={nombreApellido}
          email={email}
        />

        <PreguntaNumero
          conoceCodigo={conoceCodigo}
          handleCodigo={this.handleInputChange}
        />

        {this.state.conoceCodigo && (
          <NumeroMaterial
            numeroMaterial={numeroMaterial}
            handleChanges={this.handleInputChange}
          />
        )}
        {!this.state.conoceCodigo &&
          this.state.conoceCodigo !== "" && (
            <Plantilla
              data={plantillas}
              selectPlantilla={this.handleInputChange}
              plantillaSeleccionada={plantillaSeleccionada}
              loading={loadingPlantillas}
            />
          )}

        {this.state.plantillaSeleccionada !== "" &&
          !this.state.conoceCodigo && (
            <CamposDinamicos plantillaSeleccionada={plantillaSeleccionada} />
          )}

        {((this.state.conoceCodigo && this.state.conoceCodigo !== "") ||
          this.state.plantillaSeleccionada !== "") && <Camposcomunes />}

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
