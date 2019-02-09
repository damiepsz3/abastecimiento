import React, { Component } from "react";
import { Label } from "semantic-ui-react";

class TarjetaCerrada extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="TarjetaCerrada">
        <Label circular color={"grey"} empty />
        <div className="nombre"> Nombre Apellido </div>
        <div> ABRIDOR DE COMPUERTA DE VAGON </div>
      </div>
    );
  }
}

export default TarjetaCerrada;
