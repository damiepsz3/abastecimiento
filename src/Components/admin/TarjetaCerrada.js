import React, { Component } from "react";
import { withFirebase } from "../../Firebase";
import sapLogo from "../../assets/sap.svg";
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

  seleccionarBandera() {
    if (this.props.solicitud.opcionPlanta != undefined) {
      const caracterInicial = this.props.solicitud.opcionPlanta.charAt(0);
      if (caracterInicial === "A") return "argentina";
      if (caracterInicial === "4") return "peru";
      if (caracterInicial === "6") return "mexico";
      if (caracterInicial === "8") return "colombia";
      if (caracterInicial === "9") return "honduras";
      if (caracterInicial === "P") return "paraguay";
      if (caracterInicial === "U") return "uruguay";
    } else {
      return "eu";
    }
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
          <span className="email"> {solicitud.email}</span>
        </div>
        <div className=" Plantilla">
          {solicitud.numeroMaterial === "" ? (
            solicitud.plantillaSeleccionada["Nombre Plantilla"]
          ) : (
            <span>
              <img className="logoSap" alt="SAP" src={sapLogo} />{" "}
              {solicitud.numeroMaterial}{" "}
            </span>
          )}
        </div>
        <div className="Fecha">
          {solicitud.createdDate.getDate() +
            " " +
            solicitud.createdDate.toLocaleDateString("es-AR", {
              year: "numeric",
              month: "short",
            })}
        </div>
        <div className="Centro">
          <Label image>
            <Flag name={this.seleccionarBandera()} />

            {solicitud.opcionPlanta != undefined
              ? solicitud.opcionPlanta.substring(0, 4)
              : ""}
          </Label>
        </div>
      </div>
    );
  }
}

export default withFirebase(TarjetaCerrada);
