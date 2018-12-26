import React, {Component} from "react";
import {Form, Radio,
  Header,
  Grid,
  Input,

} from "semantic-ui-react";
import "../../App.css";

class PreguntaNumero extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  handleChange = (e, { value }) => this.setState({ value })



  render() {

    return (
        <Grid>
          <Header as="h4">¿Conoce el numero del material que desea solicitar?</Header>

          <Grid.Row>
            <Grid.Column width={1}>
              <Radio
                label='Si'
                name='radioGroup'
                value='Si'
                checked={this.state.value === 'Si'}
                onChange={this.handleChange}
              />
            </Grid.Column>
            <Grid.Column width={1}>
              <Radio
                label='No'
                name='radioGroup'
                value='No'
                checked={this.state.value === 'No'}
                onChange={this.handleChange}
              />
            </Grid.Column>
          </Grid.Row>


        </Grid>
        );
  }
}

export default PreguntaNumero;
