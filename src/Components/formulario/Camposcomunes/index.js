import React, { PureComponent, Fragment } from "react";
import {
  Header,
  Grid,
  Input,
  Dropdown,
  Divider,
  Checkbox
} from "semantic-ui-react";
import opciones from "./opcionesCriticidad";
import "../../../App.css";

class Camposcomunes extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      requiereStock: false,
      tieneAdj: false
    };
  }

  render() {
    const {
      opcionesPlanta,
      opcionesSector,
      opcionesSiNo,
      opcionesGradoDeCriticidad
    } = opciones;

    const { handleInputChange } = this.props;
    const { requiereStock } = this.state;
    return (
      <Fragment>
        <Divider />
        <Grid columns="2" stackable>
          <Grid.Row>
            <Grid.Column>
              <Header as="h4">Proveedor/ Marca Sugeridos</Header>
              <Input
                fluid={true}
                control="input"
                placeholder=""
                onChange={(e, { value }) =>
                  handleInputChange("proveedor", value)
                }
              />
            </Grid.Column>
            <Grid.Column>
              <Header as="h4">Presentación</Header>
              <Input
                fluid={true}
                control="input"
                placeholder=""
                onChange={(e, { value }) =>
                  handleInputChange("presentacion", value)
                }
              />
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
                error={this.props.errors.includes("opcionPlanta")}
                options={opcionesPlanta}
                onChange={(e, { value }) =>
                  handleInputChange("opcionPlanta", value)
                }
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
                error={this.props.errors.includes("opcionSector")}
                search={true}
                selection={true}
                onChange={(e, { value }) =>
                  handleInputChange("opcionSector", value)
                }
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
                error={this.props.errors.includes("criticidad")}
                selection={true}
                options={opcionesGradoDeCriticidad}
                onChange={(e, { value }) =>
                  handleInputChange("criticidad", value)
                }
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
                error={this.props.errors.includes("repara")}
                search={false}
                selection={true}
                onChange={(e, { value }) => handleInputChange("repara", value)}
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Header as="h4">
                Valor Unitario (U$D) <span className={"requerido"}>*</span>
              </Header>
              <Input
                label="USD$"
                fluid={true}
                type="number"
                placeholder="Ej: 300"
                error={this.props.errors.includes("valorUSD")}
                onChange={(e, { value }) =>
                  handleInputChange("valorUSD", value)
                }
              />
            </Grid.Column>

            <Grid.Column>
              <Header as="h4">TAG de equipo que lo utiliza </Header>
              <Input
                fluid={true}
                control="input"
                onChange={(e, { value }) =>
                  handleInputChange("valorTAG", value)
                }
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Header as="h4">¿Tiene archivo adjunto?</Header>
              <div>
                <Checkbox
                  style={{ marginTop: 14 }}
                  toggle
                  onChange={() => {
                    handleInputChange("tieneAdjunto", !this.state.tieneAdj);
                    this.setState({ tieneAdj: !this.state.tieneAdj });
                  }}
                />
                {this.state.tieneAdj && (
                  <a
                    style={{ marginLeft: 20, verticalAlign: "super" }}
                    target="_blank"
                    href="https://google.com"
                  >
                    Haz click aqui y sube tus archivos a esta carpeta
                  </a>
                )}
              </div>
            </Grid.Column>
            <Grid.Column>
              <Header as="h4">
                ¿Requiere Stock? <span className={"requerido"}>*</span>{" "}
              </Header>
              <Dropdown
                placeholder="Seleccione Planta Requiriente"
                fluid={true}
                search={false}
                error={this.props.errors.includes("requiereStock")}
                selection={true}
                options={opcionesSiNo}
                onChange={(e, { value }) => {
                  handleInputChange("requiereStock", value);
                  value
                    ? handleInputChange("consumoAnual", "")
                    : handleInputChange("consumoAnual", "No Aplica");
                  this.setState({ requiereStock: value });
                }}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            {requiereStock && (
              <Grid.Column>
                <Header as="h4">
                  Consumo Anual Esperable <span className={"requerido"}>*</span>{" "}
                </Header>
                <Input
                  fluid={true}
                  control="input"
                  type="number"
                  error={this.props.errors.includes("consumoAnual")}
                  placeholder="Ej: 10"
                  onChange={(e, { value }) => {
                    handleInputChange("consumoAnual", value);
                  }}
                />
              </Grid.Column>
            )}
          </Grid.Row>
        </Grid>
      </Fragment>
    );
  }
}

export default Camposcomunes;
