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
      plantillaSeleccionada: {
       "Característica 1": "TIPO",
        "Característica 2": "PRESENTACIÓN",
        "Característica 3": "",
        "Característica 4": "",
        "Característica 5": "",
        "Característica 6": "",
        "Comentarios": "",
        "Creador": "Lucas Costansi",
        "Item Type": "Item",
        "Modified By": "Hernan Franch",
        "Nombre Plantilla": "PASTA",
        "Nombre Plantilla (breve)": "PASTA",
        "Número Base Material": "0",
        "Path": "sites/Abastecimientos/almacenes/ABM_Materiales/Lists/Plantillas",
        "Taxonomia BOLD": "C31200000",
        "Taxonomia BOLD:Descripción": "Adhesivos y selladores",
        "Tipo de Material": "ZRES",
        "Vigente": "VERDADERO"
      }
    };
  }







  render() {
    const { emailError, emailValue, emailFocus } = this.state;

    return (
        <Grid>


          {this.state.plantillaSeleccionada["Característica 1"] != "" && (<Grid.Row>
            <Grid.Column width={16}>
              <Header as="h4">{this.state.plantillaSeleccionada["Característica 1"] }</Header>
              <Input fluid control="input" placeholder=""/>
            </Grid.Column>
          </Grid.Row>)}

          {this.state.plantillaSeleccionada["Característica 2"] != "" && (<Grid.Row>
            <Grid.Column width={16}>
              <Header as="h4">{this.state.plantillaSeleccionada["Característica 2"] }</Header>
              <Input fluid control="input" placeholder=""/>
            </Grid.Column>
          </Grid.Row>)}

          {this.state.plantillaSeleccionada["Característica 3"] != "" && (<Grid.Row>
            <Grid.Column width={16}>
              <Header as="h4">{this.state.plantillaSeleccionada["Característica 3"] }</Header>
              <Input fluid control="input" placeholder=""/>
            </Grid.Column>
          </Grid.Row>)}

          {this.state.plantillaSeleccionada["Característica 4"] != "" && (<Grid.Row>
            <Grid.Column width={16}>
              <Header as="h4">{this.state.plantillaSeleccionada["Característica 4"] }</Header>
              <Input fluid control="input" placeholder=""/>
            </Grid.Column>
          </Grid.Row>)}

          {this.state.plantillaSeleccionada["Característica 5"] != "" && (<Grid.Row>
            <Grid.Column width={16}>
              <Header as="h4">{this.state.plantillaSeleccionada["Característica 5"] }</Header>
              <Input fluid control="input" placeholder=""/>
            </Grid.Column>
          </Grid.Row>)}

          {this.state.plantillaSeleccionada["Característica 6"] != "" && (<Grid.Row>
            <Grid.Column width={16}>
              <Header as="h4">{this.state.plantillaSeleccionada["Característica 6"] }</Header>
              <Input fluid control="input" placeholder=""/>
            </Grid.Column>
          </Grid.Row>)}

        </Grid>
        );
  }
}

export default CamposDinamicos;
