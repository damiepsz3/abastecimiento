import React, { PureComponent } from "react";
import { Header, Grid, Input, Label } from "semantic-ui-react";
import "../../App.css";

class Solicitante extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: "",
      emailError: false
    };
  }

  handleChange = (e, { value }) => {
    this.setState({ emailValue: value });
    if (value.includes("@ldc.com") || value.includes("bril"))
      this.props.handleInputChange("email", value);
    value.length === 0 || value.includes("@ldc.com") || value.includes("bril")
      ? this.setState({ emailError: false })
      : null;
  };

  handleValidation = () => {
    const { emailValue } = this.state;
    emailValue.length === 0 ||
    emailValue.includes("@ldc.com") ||
    emailValue.includes("bril")
      ? this.setState({ emailError: false })
      : this.setState({ emailError: true });
  };

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
              error={this.props.errors.includes("nombreApellido")}
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
              error={this.state.emailError}
              onBlur={this.handleValidation}
              onChange={this.handleChange}
              placeholder="Email"
            />

            {this.state.emailError && (
              <Label basic color="red" pointing>
                Debes utilizar tu dirección de correo corporativa
              </Label>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Solicitante;
