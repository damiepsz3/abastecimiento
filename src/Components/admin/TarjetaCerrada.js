import React, { Component } from "react";
import { withFirebase } from "../../Firebase";

import { Label, Flag } from "semantic-ui-react";
class TarjetaCerrada extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  seleccionarColor(estado) {
    if (estado === "pendiente") return "grey";
    if (estado === "rechazada") return "red";
    return "green";
  }

  render() {
    const { solicitud } = this.props;
    return (
      <div className="TarjetaCerrada">
        <div className="nombre">
          <Label
            circular
            color={this.seleccionarColor(this.props.estado)}
            empty
          />
          {solicitud.nombreApellido}
        </div>
        <div className=" Plantilla">
          {" "}
          {solicitud.plantillaSeleccionada["Nombre Plantilla"]}{" "}
        </div>
        <div className="Fecha">
          {this.props.firebase.timeStampToDate(solicitud.createdDate)}
        </div>
        <div className="Centro">
          <Label image>
            <Flag name="argentina" />
            {solicitud.opcionPlanta.substring(0, 4)}
          </Label>
        </div>
      </div>
    );
  }
}

export default withFirebase(TarjetaCerrada);
