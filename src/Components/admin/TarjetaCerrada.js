import React, { Component } from "react";
import { Label, Flag } from "semantic-ui-react";
class TarjetaCerrada extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="TarjetaCerrada">
        <div className="nombre">
          <Label circular color={"grey"} empty /> Nombre Apellido{" "}
        </div>
        <div className="Plantilla"> ABRIDOR DE COMPUERTA DE VAGON </div>
        <div className="Fecha">30 Dic 2018</div>
        <div className="Centro">
          <Label image>
            <Flag name="argentina" />
            {/* <img src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" /> */}
            A101
          </Label>
        </div>
      </div>
    );
  }
}

export default TarjetaCerrada;
