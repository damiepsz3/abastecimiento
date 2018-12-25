import React, {Component} from "react";
import {
  Header,
  Grid,
  Input,

} from "semantic-ui-react";
import "../../App.css";

class CamposDinamicos extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {
    const { emailError, emailValue, emailFocus } = this.state;

    return (
        <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h4">Campo i</Header>
            <Input fluid control="input" placeholder=""/>
          </Grid.Column>
        </Grid.Row>

        </Grid>
        );
  }
}

export default Solicitante;
