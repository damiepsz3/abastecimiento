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
      numeroMaterial: "",
      camposDinamicos: {},
      unidadMedida: "",
      opcionPlanta: "",
      opcionSector: "",
      criticidad: "",
      repara: "",
      valorUSD: "",
      valorTAG: "",
      requiereStock: "",
      consumoAnual: "",
      proveedor: "",
      presentacion: ""
    };
  }

  componentDidMount() {
    GoogleApi.init().then(result =>
      this.setState({ plantillas: result, loadingPlantillas: false })
    );
  }

  componentDidUpdate(prevProps, prevState) {
    //llenar las propiedades del campo dinamico solo cuando se selecciona plantilla
    if (
      prevState.plantillaSeleccionada === "" &&
      typeof this.state.plantillaSeleccionada === "object"
    )
      if (
        prevState.plantillaSeleccionada["Nombre Plantilla"] !==
        this.state.plantillaSeleccionada["Nombre Plantilla"]
      )
        this.setState({
          camposDinamicos: Object.assign(
            {},
            ...Object.keys(this.state.plantillaSeleccionada)
              .filter(prop => prop.includes("Característica"))
              .filter(
                propFil => this.state.plantillaSeleccionada[propFil] !== ""
              )
              .map(c => ({ [this.state.plantillaSeleccionada[c]]: "" }))
          )
        });
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
      numeroMaterial,
      camposDinamicos
    } = this.state;

    console.log(this.state);

    return (
      <React.Fragment>
        <Header as="h1" style={{ marginTop: 40 }}>
          Formulario de abastecimiento
        </Header>

        <Solicitante
          handleInputChange={this.handleInputChange}
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
            <CamposDinamicos
              plantillaSeleccionada={plantillaSeleccionada}
              caracteristicas={camposDinamicos}
              handleInputChange={this.handleInputChange}
            />
          )}

        {((this.state.conoceCodigo && this.state.conoceCodigo !== "") ||
        this.state.plantillaSeleccionada !== "") && (
          <Camposcomunes handleInputChange={this.handleInputChange} />
        )}

        <Grid textAlign="center" style={{ marginTop: 50 }}>
          <Grid.Row>
            <Container textAlign="center">
              <Button primary type="submit">
                Solicitar
              </Button>
            </Container>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Form;
