import React, {Component} from "react";
import {Form, Radio,
  Header,
  Grid,
  Input,

} from "semantic-ui-react";
import "../../App.css";

class NumeroMaterial extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  handleChange = (e, { value }) => {
  this.setState({ value })
  
  }

  render() {

    return (
        <Grid>


          <Grid.Row>
            <Grid.Column width={16}>
              <Header as="h4">Número de material a solicitar</Header>
              <Input fluid control="input" onChange={this.handleChange}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        );
  }
}

export default NumeroMaterial;
