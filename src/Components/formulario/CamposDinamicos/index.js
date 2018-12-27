import React, { Component, Fragment } from "react";
import { Header, Grid, Input, Dropdown, Divider } from "semantic-ui-react";
import opcionesUnidadesDeMedida from "./unidadesMedidas";

class CamposDinamicos extends Component {
  render() {
    const { plantillaSeleccionada } = this.props;
    return (
      <Fragment>
        <Divider />
        <Grid>
          {plantillaSeleccionada["Nombre Plantilla"] !== undefined && (
            <Header>
              Complete características para:{" "}
              {plantillaSeleccionada["Nombre Plantilla"]}, Cat.:{" "}
              {plantillaSeleccionada["Taxonomia BOLD:Descripción"]}.
            </Header>
          )}
          {plantillaSeleccionada["Característica 1"] !== undefined &&
            plantillaSeleccionada["Característica 1"] !== "" && (
              <Grid.Row>
                <Grid.Column width={16}>
                  <Header as="h4">
                    {plantillaSeleccionada["Característica 1"]
                      .toLowerCase()
                      .replace(/^\w/, c => c.toUpperCase())}
                  </Header>
                  <Input fluid control="input" placeholder="" />
                </Grid.Column>
              </Grid.Row>
            )}

          {plantillaSeleccionada["Característica 2"] !== undefined &&
            plantillaSeleccionada["Característica 2"] !== "" && (
              <Grid.Row>
                <Grid.Column width={16}>
                  <Header as="h4">
                    {plantillaSeleccionada["Característica 2"]
                      .toLowerCase()
                      .replace(/^\w/, c => c.toUpperCase())}
                    <span className={"requerido"}>*</span>
                  </Header>
                  <Input fluid control="input" placeholder="" />
                </Grid.Column>
              </Grid.Row>
            )}

          {plantillaSeleccionada["Característica 3"] !== undefined &&
            plantillaSeleccionada["Característica 3"] !== "" && (
              <Grid.Row>
                <Grid.Column width={16}>
                  <Header as="h4">
                    {plantillaSeleccionada["Característica 3"]
                      .toLowerCase()
                      .replace(/^\w/, c => c.toUpperCase())}
                    <span className={"requerido"}>*</span>
                  </Header>
                  <Input fluid control="input" placeholder="" />
                </Grid.Column>
              </Grid.Row>
            )}

          {plantillaSeleccionada["Característica 4"] !== undefined &&
            plantillaSeleccionada["Característica 4"] !== "" && (
              <Grid.Row>
                <Grid.Column width={16}>
                  <Header as="h4">
                    {plantillaSeleccionada["Característica 4"]
                      .toLowerCase()
                      .replace(/^\w/, c => c.toUpperCase())}
                    <span className={"requerido"}>*</span>
                  </Header>
                  <Input fluid control="input" placeholder="" />
                </Grid.Column>
              </Grid.Row>
            )}

          {plantillaSeleccionada["Característica 5"] !== undefined &&
            plantillaSeleccionada["Característica 5"] !== "" && (
              <Grid.Row>
                <Grid.Column width={16}>
                  <Header as="h4">
                    {plantillaSeleccionada["Característica 5"]
                      .toLowerCase()
                      .replace(/^\w/, c => c.toUpperCase())}
                    <span className={"requerido"}>*</span>
                  </Header>
                  <Input fluid control="input" placeholder="" />
                </Grid.Column>
              </Grid.Row>
            )}

          {plantillaSeleccionada["Característica 6"] !== undefined &&
            plantillaSeleccionada["Característica 6"] !== "" && (
              <Grid.Row>
                <Grid.Column width={16}>
                  <Header as="h4">
                    {plantillaSeleccionada["Característica 6"]
                      .toLowerCase()
                      .replace(/^\w/, c => c.toUpperCase())}
                    <span className={"requerido"}>*</span>
                  </Header>
                  <Input fluid control="input" placeholder="" />
                </Grid.Column>
              </Grid.Row>
            )}

          {plantillaSeleccionada["Nombre Plantilla"] !== undefined && (
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
                />
              </Grid.Column>
            </Grid.Row>
          )}
        </Grid>
      </Fragment>
    );
  }
}

export default CamposDinamicos;
