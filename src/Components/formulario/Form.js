import React, { Component } from "react";
import {
  Container,
  Header,
  Grid,
  Table,
  Icon,
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
  }

  validarCampos = () => {
    const errors = Object.keys(this.state)
      .filter(prop => this.state[prop] === "")
      .filter(
        this.state.conoceCodigo === true
          ? e =>
              e !== "plantillaSeleccionada" &&
              e !== "unidadMedida" &&
              e !== "proveedor" &&
              e !== "presentacion"
          : e =>
              e !== "proveedor" &&
              e !== "presentacion" &&
              e !== "numeroMaterial"
      )
      .concat(
        Object.keys(this.state.camposDinamicos).filter(
          prop => this.state.camposDinamicos[prop] === ""
        )
      );
    this.setState({ errors }, () => {
      if (this.state.errors.length === 0) {
        this.setState({ open: true });
      }
    });
  };

  cerrar = () => {
    this.setState({ open: false });
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
    console.log("campo:" + campo + " value:" + value);

    //agrega "no aplica" a consumo anual para que no de error.
    if (campo === "requiereStock" && value === false) {
      this.setState({ consumoAnual: "No Aplica" });
      // si require stock pasa cambia a si, entonces tengo que sacar el "No aplica" para que sea validado
    } else if (
      campo === "requiereStock" &&
      value === true &&
      this.state.consumoAnual === "No Aplica"
    ) {
      this.setState({ consumoAnual: "" });
    }

    this.setState(prevState => ({
      [campo]: value,
      errors: prevState.errors.filter(e => e !== campo)
    }));

    console.log("campo:" + campo);
    console.log(this.state.errors);
  };

  handelOpenModal = () => {
    if (this.state.errors.length === 0) {
      this.setState({ open: true });
    }
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

          {this.state.errors.length === 0 && (
            <Modal
              onOpen={this.handelOpenModal}
              onClose={this.cerrar}
              open={this.state.open}
            >
              <Modal.Header>
                Informacion recolectada en el formulario
              </Modal.Header>
              <Modal.Content>
                <Table celled striped>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell collapsing>Nombre y Apellido</Table.Cell>
                      <Table.Cell>{this.state.nombreApellido}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Email</Table.Cell>
                      <Table.Cell>{this.state.email}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Número de material a solicitar</Table.Cell>
                      <Table.Cell>{this.state.numeroMaterial}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell> Plantilla Seleccionada </Table.Cell>
                      <Table.Cell>
                        {this.state.plantillaSeleccionada["Nombre Plantilla"]}
                      </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Categoría Seleccionada</Table.Cell>
                      <Table.Cell>
                        {" "}
                        {
                          this.state.plantillaSeleccionada[
                            "Taxonomia BOLD:Descripción"
                          ]
                        }
                      </Table.Cell>
                    </Table.Row>
                    {Object.keys(this.state.camposDinamicos).map((cd, idx) => (
                      <Table.Row key={idx}>
                        <Table.Cell>{cd}</Table.Cell>
                        <Table.Cell>
                          {this.state.camposDinamicos[cd]}
                        </Table.Cell>
                      </Table.Row>
                    ))}
                    <Table.Row>
                      <Table.Cell>Proveedor/ Marca Sugeridos</Table.Cell>
                      <Table.Cell>{this.state.proveedor}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Presentación</Table.Cell>
                      <Table.Cell>{this.state.presentacion}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Planta</Table.Cell>
                      <Table.Cell>{this.state.opcionPlanta}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Sector</Table.Cell>
                      <Table.Cell>{this.state.opcionSector}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Criticidad</Table.Cell>
                      <Table.Cell>{this.state.criticidad}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>¿Se Repara?</Table.Cell>
                      <Table.Cell>{this.state.repara ? "Si" : "No"}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Valor Unitario (U$D)</Table.Cell>
                      <Table.Cell>{this.state.valorUSD}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>TAG de equipo que lo utiliza</Table.Cell>
                      <Table.Cell>{this.state.valorTAG}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>¿Requiere Stock? </Table.Cell>
                      <Table.Cell>
                        {this.state.requiereStock ? "Si" : "No"}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Consumo Anual Esperable</Table.Cell>
                      <Table.Cell>{this.state.consumoAnual}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Modal.Content>
            </Modal>
          )}
        </Grid>
      </React.Fragment>
    );
  }
}

export default Form;
