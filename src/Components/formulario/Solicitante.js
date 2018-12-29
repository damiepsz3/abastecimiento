import React, { PureComponent } from "react";
import { Header, Grid, Input } from "semantic-ui-react";
import "../../App.css";

class Solicitante extends PureComponent {
  render() {
    const { nombreApellido, email, handleInputChange } = this.props;

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h4">
              Nombre y Apellido <span className={"requerido"}>*</span>
            </Header>
            <Input
              fluid
              control="input"
              onChange={(e, { value }) =>
                handleInputChange("nombreApellido", value)
              }
              value={nombreApellido}
              placeholder="Nombre y Apellido"
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as="h4">
              Email <span className={"requerido"}>*</span>
            </Header>
            <Input
              fluid
              control="input"
              onChange={(e, { value }) => handleInputChange("email", value)}
              value={email}
              placeholder="Email"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Solicitante;
