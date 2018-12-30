import React, { PureComponent } from "react";
import { Header, Grid, Input } from "semantic-ui-react";
import "../../App.css";

class Solicitante extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      emailError: false
    };
  }

  handleChange = (e, { value }) => {
    this.props.handleInputChange("email", value);
    value.length === 0 || value.includes("@ldc.com") || value.includes("bril")
      ? this.setState({ emailError: false })
      : this.props.handleInputChange("email", value);
  };

  handleValidation = () => {
    console.log(this.props.email);
    const email = this.props.email;
    email.length === 0 || email.includes("@ldc.com") || email.includes("bril")
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
              onBlur={() => this.handleValidation(this.props.email)}
              onChange={this.handleChange}
              placeholder="Email"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Solicitante;
