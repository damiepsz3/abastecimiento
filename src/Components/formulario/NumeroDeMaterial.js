import React, {Component} from "react";
import {Form, Radio,
  Header,
  Grid,
  Input,

} from "semantic-ui-react";
import "../../App.css";

class NumeeroDeMaterial extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  handleChange = (e, { value }) => this.setState({ value })


}
  render() {
    const { emailError, emailValue, emailFocus } = this.state;

    return (
        <Grid>
          <Form>
            <Grid.Row>
              <Grid.Column width={3}>

                <Form.Field>
                  ¿Conoce el numero del material que desea solicitar? <b>{this.state.value}</b>
                </Form.Field>
                <Form.Field>
                  <Radio
                    label='Si'
                    name='radioGroup'
                    value='Si'
                    checked={this.state.value === 'Si'}
                    onChange={this.handleChange}
                  />
                </Form.Field>




              </Grid.Column>
              <Grid.Column width={3}>
                <Form.Field>
                  <Radio
                    label='No'
                    name='radioGroup'
                    value='No'
                    checked={this.state.value === 'No'}
                    onChange={this.handleChange}
                  />
                </Form.Field>
          </Grid.Column>
        </Grid.Row>
  </Form>
        </Grid>
        );
  }
}

export default NumeeroDeMaterial;
