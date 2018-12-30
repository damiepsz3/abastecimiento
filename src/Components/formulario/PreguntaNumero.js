import React, { PureComponent, Fragment } from "react";
import {
  Radio,
  Header,
  Divider,
  Grid,
  Popup,
  Icon,
  Modal,
  Button,
  Image
} from "semantic-ui-react";
import "../../App.css";
import Tutorial from "../../assets/tutorial.png";

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
              Si encontró el material catalogado en SAP en otro centro,
              selecciones "Si" e ingrese su número. Esto ayudará a reducir la
              cantidad datos a ingresar y los tiempos de catalogación.
            </Popup>
            <Modal
              size={"fullscreen"}
              closeIcon
              trigger={<a>¿Donde lo encuntro?</a>}
            >
              <Modal.Header>
                Instrucciones para buscar código en SAP
              </Modal.Header>
              <Modal.Content image>
                <Image fluid src={Tutorial} />
              </Modal.Content>
            </Modal>
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
