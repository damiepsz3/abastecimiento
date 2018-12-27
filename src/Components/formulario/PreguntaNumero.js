import React, { Component, Fragment } from "react";
import { Form, Radio, Header, Divider, Grid, Input } from "semantic-ui-react";
import "../../App.css";

class PreguntaNumero extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleCodigo } = this.props;
    return (
      <Fragment>
        <Divider />

        <Grid>
          <Header as="h4">
            ¿Conoce el numero del material que desea solicitar?{" "}
            <span className={"requerido"}>*</span>
          </Header>
          <Grid.Row>
            <Grid.Column width={16}>
              <Radio
                label="Si    "
                name="radioGroup"
                value="Si"
                checked={this.props.conoceCodigo === "Si"}
                onChange={(e, { value }) => handleCodigo(value)}
                style={{ paddingRight: "35px" }}
              />

              <Radio
                label="No"
                name="radioGroup"
                value="No"
                checked={this.props.conoceCodigo === "No"}
                onChange={(e, { value }) => handleCodigo(value)}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Fragment>
    );
  }
}

export default PreguntaNumero;
