import React, {Component} from "react";
import { Icon } from 'semantic-ui-react'

import {Form, Radio,
  Header,
  Grid,
  Input,
  Popup,
  Icons

} from "semantic-ui-react";
import "../../App.css";

class NumeroMaterial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numMaterial: "",
      errorState: false,
      iconState: null,
    };
  }
  handleChange = (e, { value }) => {

    var numero = value
    //remove the ins string from the value if there is any.
    numero = numero.replace(/^ins/gi, '')
    //check if the result contains only digits.
    var isnum = /^\d+$/.test(numero);
    //if there are other character that aren't digits then show error.
    if (numero.length === 0) {
      this.setState({ iconState: null, errorState:false  })
    }
    else if ((value.length >3 && isnum === false) || numero.length > 18){
      this.setState({ iconState: null,  errorState: true })
    }
    else{
       this.setState({ iconState: null, errorState: false})
    }
      this.setState({ numMaterial: value })

  }

  handleValidation = () => {
  var numero = this.state.numMaterial
  //remove the ins string from the value if there is any.
  numero = numero.replace(/^ins/gi, '')
  //check if the result contains only digits.
  var isnum = /^\d+$/.test(numero);
  if (  isnum && numero.length >= 16 &&  numero.length <= 18) {
  this.setState({ iconState: 'check' })}
  else  {
  this.setState({ iconState: null,  errorState: true })
  }
}

  render() {
    const {numMaterial, errorState, iconState} = this.state
    return (
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h4">Número de material a solicitar <Popup trigger={ <Icon size='tiny' name='question circle outline' />} wide>
                Hello. This is a wide pop-up which allows for lots of content with additional space. You can
                fit a lot of words here and the paragraphs will be pretty wide.
              </Popup> </Header>

              <Input fluid control="input" icon={iconState} className={"NumeroMaterial"} value={numMaterial} error={errorState} onBlur={this.handleValidation} onChange={this.handleChange}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        );
  }
}

export default NumeroMaterial;
