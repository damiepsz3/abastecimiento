import React, { Component } from "react";
import {
  Container,
  Header,
  Grid,
  Button,
  Modal,
  List
} from "semantic-ui-react";
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
  }

  validarCampos = () => {
    const errors = Object.keys(this.state)
      .filter(prop => this.state[prop] === "")
      .concat(
        Object.keys(this.state.camposDinamicos).filter(
          prop => this.state.camposDinamicos[prop] === ""
        )
      );
    this.setState({ errors });
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

  handleInputChange = (name, value) => {
    console.log(name);
    console.log(this.state.errors);
    this.setState(prevState => ({
      [name]: value,
      errors: prevState.errors.filter(e => e !== name)
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
      <React.Fragment>
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
        </Grid>
        <Modal basic closeIcon open={true}>
          <Header icon="browser" content="Valores" />
          <Modal.Content>
            <List.List>
              {Object.keys(this.state)
                .filter(
                  f =>
                    f !== "plantillas" &&
                    f !== "camposDinamicos" &&
                    f !== "errors" &&
                    f !== "loadingPlantillas"
                )
                .map((t, idx) => (
                  <List.Item key={idx}>{`${t}: ${this.state[t]}`}</List.Item>
                ))}
              {Object.keys(this.state.camposDinamicos).map((cd, idx) => (
                <List.Item key={idx}>{`${cd}: ${this.state[cd]}`}</List.Item>
              ))}
            </List.List>
          </Modal.Content>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Form;
