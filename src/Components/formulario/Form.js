import React, { Component } from "react";
import { Container, Header, Grid, Divider, Button } from "semantic-ui-react";
import Plantilla from "./Plantilla";
import Camposcomunes from "./Camposcomunes";
import Solicitante from "./Solicitante";
import CamposDinamicos from "./CamposDinamicos";
import "../../App.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plantillaSeleccionada: ""
    };
  }

  seleccionarPlantilla = plantilla => {
    this.setState({ plantillaSeleccionada: plantilla });
  };

  render() {
    const { data } = this.props;
    const { plantillaSeleccionada } = this.state;
    console.log(plantillaSeleccionada);
    return (
      <React.Fragment>
        <Header
          as="h1"
          style={{
            marginTop: 40
          }}
        >
          Formulario de abastecimiento
        </Header>

        <Solicitante />
        <Divider />
        <Plantilla
          data={data}
          selectPlantilla={this.seleccionarPlantilla}
          plantillaSeleccionada={plantillaSeleccionada}
        />
        <Divider />
        <CamposDinamicos plantillaSeleccionada={plantillaSeleccionada} />
        <Divider />
        <Camposcomunes />

        <Grid style={{ marginTop: 40 }}>
          <Grid.Row>
            <Container
              textAlign="center"
              style={{
                marginTop: 60
              }}
            >
              <Button type="submit">Solicitar</Button>
            </Container>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Form;
