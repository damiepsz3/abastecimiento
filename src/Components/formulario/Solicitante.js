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
      plantillas: [],
    };
  }


  componentDidMount() {}

  render() {
    const {plantillas} = this.state;

    return (
        <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h4">Nombre y Apellido</Header>
            <Input fluid control="input" placeholder="Nombre y Apellido"/>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as="h4">Email</Header>
            <Input fluid control="input" placeholder="Email"/>
          </Grid.Column>
        </Grid.Row>

        </Grid>
        );
  }
}

export default Solicitante;
