import React, {Component} from "react";
import {


  Header,
  Grid,
  Input,

} from "semantic-ui-react";
import "../../App.css";

class Solicitante extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailError: false ,
      emailValue: '',

    };
  }

handleChange = ( e, {value} ) => {
  this.setState({emailValue: value,})
}

handleValidation = () => {
var email = this.state.emailValue


}


  render() {
    const { emailError, emailValue,  } = this.state;

    return (
        <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h4">Nombre y Apellido</Header>
            <Input fluid control="input" placeholder="Nombre y Apellido"/>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as="h4">Email</Header>
            <Input fluid control="input" error={emailError} onChange={this.handleChange} onBlur={this.handleValidation} value={emailValue} placeholder="Email"/>
          </Grid.Column>
        </Grid.Row>

        </Grid>
        );
  }
}

export default Solicitante;
