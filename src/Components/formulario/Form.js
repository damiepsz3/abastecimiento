import React, { Component } from "react";
import { Container, Header, Grid, Button } from "semantic-ui-react";
import GoogleApi from "../../GoogleApi";
import Plantilla from "./Plantilla";
import Camposcomunes from "./Camposcomunes";
import Solicitante from "./Solicitante";
import CamposDinamicos from "./CamposDinamicos";
import PreguntaNumero from "./PreguntaNumero";
import NumeroMaterial from "./NumeroMaterial";
import ResultsModal from "./ResultsModal";
import { withFirebase } from "../../Firebase";

import "../../App.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      loadingPlantillas: true,
      plantillas: [],
      plantillaSeleccionada: "",
      conoceCodigo: "",
      numeroMaterial: "",
      nombreApellido: "",
      email: "",
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
      presentacion: "",
      errors: []
    };
  }

  componentDidMount() {
    GoogleApi.init().then(result =>
      this.setState({ plantillas: result, loadingPlantillas: false })
    );

    //createTheAnonymousSession
    this.props.firebase.doAnonymousSignIn();
  }

  reloadToInit = () => {
    this.setState({
      open: false,
      plantillaSeleccionada: "",
      conoceCodigo: "",
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
      presentacion: "",
      errors: []
    });
  };

  validarCampos = () => {
    const errors = Object.keys(this.state)
      .filter(prop => this.state[prop] === "")
      .filter(
        this.state.conoceCodigo === true
          ? e =>
              e !== "plantillaSeleccionada" &&
              e !== "unidadMedida" &&
              e !== "proveedor" &&
              e !== "presentacion" &&
              e !== "valorTAG"
          : e =>
              e !== "proveedor" &&
              e !== "presentacion" &&
              e !== "valorTAG" &&
              e !== "numeroMaterial"
      )
      .concat(
        Object.keys(this.state.camposDinamicos).filter(
          prop => this.state.camposDinamicos[prop] === ""
        )
      );
    this.setState({ errors }, () => {
      if (this.state.errors.length === 0) {
        //this.setState({ open: true });
        this.handleOpenModal();
      } else if (this.state.nombreApellido === "" || this.state.email === "") {
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
        }, 300);
      }
    });
  };

  handleOpenModal = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

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

  handleInputChange = (campo, value) => {
    this.setState(prevState => ({
      [campo]: value,
      errors: prevState.errors.filter(e => e !== campo)
    }));
  };

  render() {
    const {
      plantillaSeleccionada,
      plantillas,
      loadingPlantillas,
      conoceCodigo,
      numeroMaterial,
      camposDinamicos,
      errors
    } = this.state;

    return (
      <Container>
        <Header as="h1" style={{ marginTop: 40 }}>
          Formulario de abastecimiento
        </Header>

        <Solicitante
          handleInputChange={this.handleInputChange}
          errors={errors}
        />

        <PreguntaNumero
          conoceCodigo={conoceCodigo}
          handleCodigo={this.handleInputChange}
        />

        {this.state.conoceCodigo && (
          <NumeroMaterial
            numeroMaterial={numeroMaterial}
            errors={errors}
            handleChanges={this.handleInputChange}
          />
        )}
        {!this.state.conoceCodigo && this.state.conoceCodigo !== "" && (
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
              errors={errors}
              handleInputChange={this.handleInputChange}
            />
          )}

        {((this.state.conoceCodigo && this.state.conoceCodigo !== "") ||
          this.state.plantillaSeleccionada !== "") && (
          <Camposcomunes
            handleInputChange={this.handleInputChange}
            errors={errors}
          />
        )}

        <Grid textAlign="center" style={{ marginTop: 50 }}>
          <Grid.Row>
            <Container textAlign="center">
              <Button
                primary
                type="submit"
                onClick={this.validarCampos}
                disabled={
                  !(
                    (this.state.conoceCodigo &&
                      this.state.conoceCodigo !== "") ||
                    this.state.plantillaSeleccionada !== ""
                  )
                }
              >
                Solicitar
              </Button>
            </Container>
          </Grid.Row>
          <ResultsModal
            solicitud={this.state}
            open={this.state.open}
            handleOpenModal={this.handleOpenModal}
            reload={this.reloadToInit}
          />
        </Grid>
      </Container>
    );
  }
}

export default withFirebase(Form);
