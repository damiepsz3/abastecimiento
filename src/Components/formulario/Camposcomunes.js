import React, {Component} from "react";
import {Header, Grid, Input, Dropdown} from "semantic-ui-react";
import "../../App.css";

class Camposcomunes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plantillas: []
    };
  }

  opcionesGradoDeCriticidad = [
    {
      key: 'ad',
      value: 'Critico',
      text: 'Critico'
    }, {
      key: 'afs',
      value: 'Poco Critico',
      text: 'Poco Critico'
    }, {
      key: 'afa',
      value: 'Medianamente Critico',
      text: 'Medianamente Critico'
    }
  ]

  componentDidMount() {}

  render() {
    const {plantillas} = this.state;

    return (<Grid>
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h4">Tamaño / Dimensiones</Header>
          <Input fluid={true} control="input" placeholder="Ej: 30cm x 30cm x 2,5cm"/>
        </Grid.Column>
        <Grid.Column width={8}>
          <Header as="h4">Grado de Criticidad</Header>
          <Dropdown placeholder='Seleccione Grado de Criticidad' fluid={true} search={true} selection={true} options={this.opcionesGradoDeCriticidad}/>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h4">Planta Requiriente</Header>
          <Dropdown placeholder='Seleccione Planta Requiriente' fluid={true} search={true} selection={true} options={this.opcionesGradoDeCriticidad}/>
        </Grid.Column>
        <Grid.Column width={8}>
          <Header as="h4">Sector</Header>
          <Dropdown options={this.opcionesGradoDeCriticidad} placeholder='Seleccione Sector' fluid={true} search={true} selection={true}/>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h4">Cantidad Requerida</Header>
          <Input fluid={true} control="input" placeholder="Ej: 3 unidades"/>
        </Grid.Column>
        <Grid.Column width={8}>
          <Header as="h4">Valor Presupuestado Total (USD)</Header>
          <Input label='USD$' fluid={true} placeholder='Monto'/>
        </Grid.Column>
      </Grid.Row>
    </Grid>);
  }
}

export default Camposcomunes;
