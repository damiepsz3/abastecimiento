import React, { PureComponent, Fragment } from "react";
import { Radio, Header, Divider, Grid, Popup, Icon } from "semantic-ui-react";
import "../../App.css";

class PreguntaNumero extends PureComponent {
  render() {
    const { handleCodigo, conoceCodigo } = this.props;
    return (
      <Fragment>
        <Divider />

        <Grid>
          <Header as="h4">
            ¿Conoce el numero del material que desea solicitar?{" "}
            <span className={"requerido"}>*</span>
            <Popup trigger={<Icon size="tiny" name="info circle" />} wide>
              Si encontro el material catalogado en SAP en otro centro, ingrese
              el codigo. Esto ayudara a reducir los datos a solicitar y los
              tiempos de catalogación.
            </Popup>
          </Header>

          <Grid.Row>
            <Grid.Column width={16}>
              <Radio
                label="Si"
                name="conoceCodigo"
                checked={conoceCodigo === "" ? false : conoceCodigo}
                onChange={() => handleCodigo("conoceCodigo", true)}
                style={{ paddingRight: "35px" }}
              />

              <Radio
                label="No"
                name="conoceCodigo"
                checked={conoceCodigo === "" ? false : !conoceCodigo}
                onChange={() => handleCodigo("conoceCodigo", false)}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Fragment>
    );
  }
}

export default PreguntaNumero;
