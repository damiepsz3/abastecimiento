import React, { PureComponent, Fragment } from "react";
import { Header, Grid, Input, Dropdown, Divider } from "semantic-ui-react";
import opcionesUnidadesDeMedida from "./unidadesMedidas";

class CamposDinamicos extends PureComponent {
  componentDidMount() {}

  handleInput = (prop, value) => {
    this.props.handleInputChange("camposDinamicos", {
      ...this.props.caracteristicas,
      [prop]: value
    });
  };

  render() {
    const { handleInputChange, caracteristicas, errors } = this.props;

    return (
      <Fragment>
        <Divider />
        <Grid>
          <Header>
            Complete las características de la plantilla seleccionada
          </Header>
          {Object.keys(caracteristicas).map((caracteristica, idx) => (
            <Grid.Row key={idx}>
              <Grid.Column width={16}>
                <Header as="h4">
                  {caracteristica
                    .toLowerCase()
                    .replace(/^\w/, c => c.toUpperCase())}
                  <span className={"requerido"}>*</span>
                </Header>
                <Input
                  fluid
                  control="input"
                  placeholder=""
                  error={
                    errors.includes(caracteristica) &&
                    caracteristicas[caracteristica] === ""
                  }
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
                  error={errors.includes("unidadMedida")}
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
