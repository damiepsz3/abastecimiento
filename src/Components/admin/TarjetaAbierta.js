import React, { Component } from "react";
import {
  Divider,
  Image,
  Button,
  Icon,
  Form,
  TextArea
} from "semantic-ui-react";
import DreyfusBarcode from "../../assets/DreyfusBarcode.svg";
import DreyfusCentro from "../../assets/DreyfusCentro.svg";
import DreyfusDollar from "../../assets/DreyfusDollar.svg";
import DreyfusSector from "../../assets/DreyfusSector.svg";
import DreyfusStock from "../../assets/DreyfusStock.svg";
import DreyfusTap from "../../assets/DreyfusTap.svg";
import DreyfusVendedor from "../../assets/DreyfusVendedor.svg";
import DreyfusWrench from "../../assets/DreyfusWrench.svg";
import sapLogo from "../../assets/sap.svg";
import { withFirebase } from "../../Firebase";

class TarjetaAbierta extends Component {
  constructor(props) {
    super(props);
    this.state = { rechazando: false, razon: props.solicitud.razon };
  }

  handleAceptar() {
    this.setState({ rechazando: false });
    this.props.cerrarPanel(this.props.solicitud.id);
    this.props.firebase.updateSolicitud(this.props.solicitud.id, "aceptada");
  }

  handleRechazar() {
    this.setState({ rechazando: true });
  }

  handleTerminarDeProcesar() {
    this.props.cerrarPanel(this.props.solicitud.id);
    this.props.firebase.updateSolicitud(
      this.props.solicitud.id,
      "rechazada",
      this.state.razon
    );
  }

  handleRazon(event) {
    this.setState({ razon: event.target.value });
  }

  render() {
    const { solicitud } = this.props;
    let camposDinamicos = [];
    if (solicitud.camposDinamicos) {
      camposDinamicos = Object.keys(solicitud.camposDinamicos).map(
        caracteristica => (
          <div className="grid-itemPlantilla" key={caracteristica}>
            <div className="tituloPlantilla">{caracteristica}</div>
            {solicitud.camposDinamicos[caracteristica]}
          </div>
        )
      );
    }

    return (
      <div className="TarjetaAbierta">
        <div className="Plantilla">
          {solicitud.plantillaSeleccionada["Nombre Plantilla"]}
        </div>
        <div className="Categoria">
          {solicitud.plantillaSeleccionada["Taxonomia BOLD:Descripción"]}
        </div>
        <div className="GridContainerPlantilla">
          {camposDinamicos}
          {solicitud.unidadMedida && (
            <div className="grid-itemPlantilla">
              <div className="tituloPlantilla">UNIDAD DE MEDIDA</div>
              {solicitud.unidadMedida}
            </div>
          )}
          {solicitud.numeroMaterial !== "" && (
            <span>
              <img className="logoSap" alt="SAP" src={sapLogo} />{" "}
              {solicitud.numeroMaterial}{" "}
            </span>
          )}
        </div>

        <Divider fitted />
        <div className="GridContainerPlantilla">
          <div className="itemCampoComun">
            <Image src={DreyfusCentro} verticalAlign="middle" />
            <span>{solicitud.opcionPlanta}</span>
          </div>

          <div className="itemCampoComun">
            <Image src={DreyfusStock} verticalAlign="middle" />
            <span>
              {solicitud.requiereStock ? "REQUIERE STOCK" : "NO REQUIERE STOCK"}
            </span>
          </div>
          <div className="itemCampoComun">
            <Image src={DreyfusSector} verticalAlign="middle" />
            <span>{solicitud.opcionSector} </span>
          </div>
          <div className="itemCampoComun">
            <Image src={DreyfusDollar} verticalAlign="middle" />
            <span>{solicitud.valorUSD} </span>
          </div>
          {solicitud.proveedor !== "" && (
            <div className="itemCampoComun">
              <Image src={DreyfusVendedor} verticalAlign="middle" />
              <span>{solicitud.proveedor}</span>
            </div>
          )}
          {solicitud.consumoAnual !== "No Aplica" && (
            <div className="itemCampoComun">
              <Image src={DreyfusTap} verticalAlign="middle" />
              <span>{solicitud.consumoAnual} </span>
            </div>
          )}

          <div className="itemCampoComun">
            <Image src={DreyfusWrench} verticalAlign="middle" />
            <span>
              {solicitud.repara
                ? "PRODUCTO REPARABLE"
                : "PRODUCTO NO REPARABLE"}
            </span>
          </div>
          {solicitud.valorTAG && (
            <div className="itemCampoComun">
              <Image src={DreyfusBarcode} verticalAlign="middle" />
              <span>{solicitud.valorTAG} </span>
            </div>
          )}
          <div className="itemCampoComun">
            <div>
              {" "}
              <span className="CriticidadIcono">
                {" "}
                {solicitud.criticidad.charAt(1)}{" "}
              </span>
              <span>
                {" "}
                {solicitud.criticidad.slice(
                  4,
                  solicitud.criticidad.length
                )}{" "}
              </span>
            </div>
          </div>
        </div>
        <Divider fitted />

        {(this.state.rechazando || solicitud.estado === "rechazada") && (
          <Form className="TextRechazo">
            <TextArea
              rows="2"
              autoHeight
              value={this.state.razon}
              onChange={event => this.handleRazon(event)}
              placeholder="Razon de rechazo"
            />
            <Button
              floated="right"
              onClick={() => this.handleTerminarDeProcesar()}
            >
              Terminar de Processar
            </Button>
          </Form>
        )}

        <div className="BotonesEstados">
          <Button.Group>
            <Button
              className="Aceptar"
              onClick={() => this.handleAceptar()}
              active={solicitud.estado === "aceptada" && !this.state.rechazando}
            >
              <Icon name="check" /> Aceptar
            </Button>
            <Button
              className="Pendiente"
              onClick={() =>
                this.props.firebase.updateSolicitud(solicitud.id, "pendiente")
              }
              active={solicitud.estado === "pendiente"}
            >
              <Icon name="clock" /> Pendiente
            </Button>

            <Button
              className="Rechazar"
              onClick={() => this.handleRechazar()}
              active={solicitud.estado === "rechazada" || this.state.rechazando}
            >
              <Icon name="times" /> Rechazar
            </Button>
          </Button.Group>
        </div>
      </div>
    );
  }
}

export default withFirebase(TarjetaAbierta);
