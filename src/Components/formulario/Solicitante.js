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
      emailFocus: false,

    };
  }

handleChange = ( e, {value} ) => {
  this.setState({emailValue: value,})

}




  render() {
    const { emailError, emailValue, emailFocus } = this.state;

    return (
        <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h4">Nombre y Apellido</Header>
            <Input fluid control="input" placeholder="Nombre y Apellido"/>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as="h4">Email</Header>
            <Input fluid control="input" error={emailError} onChange={this.handleChange} value={emailValue} placeholder="Email"/>
          </Grid.Column>
        </Grid.Row>

        </Grid>
        );
  }
}

export default Solicitante;
