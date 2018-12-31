import React, { PureComponent } from "react";
import Tutorial from "../../assets/tutorial.png";
import { Header, Grid, Input, Popup, Icon } from "semantic-ui-react";
import "../../App.css";

class NumeroMaterial extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      numMaterial: "",
      errorState: false,
      iconState: null
    };
  }
  handleChange = (e, { value }) => {
    this.setState({ numMaterial: value });
    var numero = value;
    //remove the ins string from the value if there is any.
    numero = numero.replace(/^ins/gi, "");
    //check if the result contains only digits.
    var isnum = /^\d+$/.test(numero);
    //if there are other character that aren't digits then show error.
    if (numero.length === 0) {
      this.setState({ iconState: null, errorState: false });
    } else if ((value.length > 3 && isnum === false) || numero.length > 18) {
      this.setState({ iconState: null, errorState: true, numeroMaterial: "" });
    } else {
      this.setState({ iconState: null, errorState: false });
      if (numero.length >= 9) this.props.handleChanges("numeroMaterial", value);
    }
  };

  handleValidation = () => {
    var numero = this.state.numMaterial;
    //remove the ins string from the value if there is any.
    numero = numero.replace(/^ins/gi, "");
    //check if the result contains only digits.
    var isnum = /^\d+$/.test(numero);
    if (this.state.numMaterial.length === 0) {
      this.setState({ iconState: null, errorState: true });
      this.props.handleChanges("numeroMaterial", "");
    } else if (isnum && numero.length >= 9 && numero.length <= 18) {
      this.setState({ iconState: "check", errorState: false });
      this.props.handleChanges("numeroMaterial", this.state.numMaterial);
    } else {
      this.setState({ iconState: null, errorState: true });
<<<<<<< HEAD
      // if (numero.length > 9) this.props.handleChanges("numeroMaterial", "");
=======
>>>>>>> 407ed251d00151f01b45176019edd87d13b36ad7
    }
  };

  render() {
    const { numMaterial, errorState, iconState } = this.state;
    return (
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h4">
              Número de material a solicitar
              <span className={"requerido"}>*</span>{" "}
              <Popup trigger={<Icon size="tiny" name="info circle" />} wide>
                El numero de material es un numero compuesto por 9 a 18 digitos
                numericos el cual puede incluir la letras "INS" al principio.
              </Popup>
            </Header>

            <Input
              fluid
              control="input"
              icon={iconState}
              className={"NumeroMaterial"}
              value={numMaterial}
              error={errorState || this.props.errors.includes("numeroMaterial")}
              onBlur={this.handleValidation}
              onChange={this.handleChange}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default NumeroMaterial;
