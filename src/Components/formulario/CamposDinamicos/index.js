import React, { Component, Fragment } from "react";
import { Header, Grid, Input, Dropdown, Divider } from "semantic-ui-react";
import opcionesUnidadesDeMedida from "./unidadesMedidas";

class CamposDinamicos extends Component {
  componentDidMount() {}

  handleInput = (prop, value) => {
    this.props.handleInputChange("camposDinamicos", {
      ...this.props.caracteristicas,
      [prop]: value
    });
  };

  render() {
    const {
      plantillaSeleccionada,
      handleInputChange,
      caracteristicas
    } = this.props;

    return (
      <Fragment>
        <Divider />
        <Grid>
          <Header>
            Complete las características de{" "}
            {plantillaSeleccionada["Nombre Plantilla"]} para la Categoría{" "}
            {plantillaSeleccionada["Taxonomia BOLD:Descripción"]}.
          </Header>
          {Object.keys(caracteristicas).map((caracteristica, idx) => (
            <Grid.Row key={idx}>
              <Grid.Column width={16}>
                <Header as="h4">
                  {caracteristica
                    .toLowerCase()
                    .replace(/^\w/, c => c.toUpperCase())}
                </Header>
                <Input
                  fluid
                  control="input"
                  placeholder=""
                  value={caracteristicas[caracteristica]}
                  onChange={(e, { value }) =>
                    this.handleInput(caracteristica, value)
                  }
                />
              </Grid.Column>
            </Grid.Row>
          ))}

          {
            <Grid.Row>
              <Grid.Column width={16}>
                <Header as="h4">
                  Unidad de Medida Sugerida
                  <span className={"requerido"}>*</span>
                </Header>
                <Dropdown
                  placeholder="Seleccione"
                  fluid={true}
                  search={true}
                  selection={true}
                  options={opcionesUnidadesDeMedida}
                  onChange={(e, { value }) =>
                    handleInputChange("unidadMedida", value)
                  }
                />
              </Grid.Column>
            </Grid.Row>
          }
        </Grid>
      </Fragment>
    );
  }
}

export default CamposDinamicos;
