import React, {Component} from "react";
import { Icon } from 'semantic-ui-react'
import Tutorial from './tutorial.png'
import {Form, Radio,
  Header,
  Grid,
  Input,
  Popup,
  Icons,
  Modal,
  Button,
  Image

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
    this.setState({ numMaterial: value })
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

  }

  handleValidation = () => {
  var numero = this.state.numMaterial
  //remove the ins string from the value if there is any.
  numero = numero.replace(/^ins/gi, '')
  //check if the result contains only digits.
  var isnum = /^\d+$/.test(numero);
  if (numero.length === 0) {
    this.setState({ iconState: null, errorState:false  })
  }
  else if (  isnum && numero.length >= 9 &&  numero.length <= 18 ) {
    this.setState({ iconState: 'check',  errorState: false})}
  else  {
    this.setState({ iconState: null,  errorState: true })
  }
}

  render() {
    const {numMaterial, errorState, iconState} = this.state
    return (
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={11}>
              <Header as="h4">Número de material a solicitar
                <Popup trigger={ <Icon size='tiny'  name='question circle outline' />} wide>
                  El numero de material es un numero compuesto por 9 a 18 digitos numericos el cual puede incluir la letras "INS" al principio.
                </Popup>
              </Header>

              <Input fluid control="input" icon={iconState} className={"NumeroMaterial"} value={numMaterial} error={errorState} onBlur={this.handleValidation} onChange={this.handleChange}/>
            </Grid.Column>
            <Grid.Column width={5} verticalAlign={'bottom'}>
              <Modal
                size={"fullscreen"}  closeIcon  trigger={<Button fluid>Ver instrucciones para buscar código en SAP</Button>}>
                <Modal.Header>Instrucciones para buscar código en SAP</Modal.Header>
                <Modal.Content image>
                  <Image fluid src={Tutorial} />
                </Modal.Content>
              </Modal>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        );
  }
}

export default NumeroMaterial;
