import React, { Component } from "react";
import {
  Label,
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

class TarjetaAbierta extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { solicitud } = this.props;
    const camposDinamicos = Object.keys(solicitud.camposDinamicos).map(
      caracteristica => (
        <div className="grid-itemPlantilla" key={caracteristica}>
          <div className="tituloPlantilla">{caracteristica}</div>
          {solicitud.camposDinamicos[caracteristica]}
        </div>
      )
    );

    return (
      <div className="TarjetaAbierta">
        <div className="Plantilla">
          {solicitud.plantillaSeleccionada["Nombre Plantilla"]}
        </div>
        <div className="Categoria">
          {solicitud.plantillaSeleccionada["Taxonomia BOLD:Descripción"]}
        </div>
        <div className="GridContainerPlantilla">{camposDinamicos}</div>
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
          <div className="itemCampoComun">
            <Image src={DreyfusBarcode} verticalAlign="middle" />
            <span>{solicitud.valorTAG} </span>
          </div>
        </div>
        <Divider fitted />
        <Form className="TextRechazo">
          <TextArea autoHeight placeholder="Razon de rechazo" />
        </Form>

        <div className="BotonesEstados">
          <Button.Group>
            <Button className="Aceptar">
              <Icon name="check" /> Aceptar
            </Button>
            <Button className="Pendiente">
              <Icon name="clock" /> Pendiente
            </Button>

            <Button className="Rechazar">
              <Icon name="times" /> Rechazar
            </Button>
          </Button.Group>
        </div>
      </div>
    );
  }
}

export default TarjetaAbierta;
