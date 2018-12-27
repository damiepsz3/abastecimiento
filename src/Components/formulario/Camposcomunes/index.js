import React, { Component } from "react";
import { Header, Grid, Input, Dropdown } from "semantic-ui-react";
import opciones from "./opcionesCriticidad";
import "../../../App.css";

class Camposcomunes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requiereStock: ""
    };
  }
  //obj = {value: 'des'}
  handleChange = (e, { value }) => this.setState({ requiereStock: value });

  componentDidMount() {}

  render() {
    const {
      opcionesPlanta,
      opcionesSector,
      opcionesSiNo,
      opcionesGradoDeCriticidad
    } = opciones;
    const { requiereStock } = this.state;
    return (
      <Grid columns="2" stackable>
        <Grid.Row>
          <Grid.Column>
            <Header as="h4">Proveedor/ Marca Sugeridos</Header>
            <Input fluid={true} control="input" placeholder="" />
          </Grid.Column>
          <Grid.Column>
            <Header as="h4">Presentación</Header>
            <Input fluid={true} control="input" placeholder="" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Header as="h4">
              Planta <span className={"requerido"}>*</span>
            </Header>
            <Dropdown
              placeholder="Seleccione Planta Requiriente"
              fluid={true}
              search={true}
              selection={true}
              options={opcionesPlanta}
            />
          </Grid.Column>
          <Grid.Column>
            <Header as="h4">
              Sector <span className={"requerido"}>*</span>
            </Header>
            <Dropdown
              options={opcionesSector}
              placeholder="Seleccione Sector"
              fluid={true}
              search={true}
              selection={true}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Header as="h4">
              Criticidad <span className={"requerido"}>*</span>
            </Header>
            <Dropdown
              placeholder="Seleccione"
              fluid={true}
              search={false}
              selection={true}
              options={opcionesGradoDeCriticidad}
            />
          </Grid.Column>
          <Grid.Column>
            <Header as="h4">
              ¿Se Repara? <span className={"requerido"}>*</span>
            </Header>
            <Dropdown
              options={opcionesSiNo}
              placeholder="Seleccione"
              fluid={true}
              search={false}
              selection={true}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Header as="h4">
              Valor Unitario (U$D) <span className={"requerido"}>*</span>
            </Header>
            <Input label="USD$" fluid={true} placeholder="Monto" />
          </Grid.Column>

          <Grid.Column>
            <Header as="h4">
              TAG de equipo que lo utiliza{" "}
              <span className={"requerido"}>*</span>
            </Header>
            <Input fluid={true} control="input" placeholder="Ej: 3 unidades" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Header as="h4">
              ¿Requiere Stock? <span className={"requerido"}>*</span>{" "}
            </Header>
            <Dropdown
              placeholder="Seleccione Planta Requiriente"
              onChange={this.handleChange}
              value={requiereStock}
              fluid={true}
              search={false}
              selection={true}
              options={opcionesSiNo}
            />
          </Grid.Column>

          {requiereStock === "Si" && (
            <Grid.Column>
              <Header as="h4">
                Consumo Anual Esperable <span className={"requerido"}>*</span>{" "}
              </Header>
              <Input
                fluid={true}
                control="input"
                placeholder="Ej: 300 unidades"
              />
            </Grid.Column>
          )}
        </Grid.Row>
      </Grid>
    );
  }
}

export default Camposcomunes;
