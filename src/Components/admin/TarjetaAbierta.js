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
    return (
      <div className="TarjetaAbierta">
        <div className="Plantilla">ABRIDOR DE COMPUERTA DE VAGON</div>
        <div className="Categoria">Bombas y compresores industriales</div>
        <div className="GridContainerPlantilla">
          <div className="grid-itemPlantilla">
            <div className="tituloPlantilla">TIPO </div>
            DENSIMETRO RANGO 0.65-0.85
          </div>
          <div className="grid-itemPlantilla">
            <div className="tituloPlantilla">NUMERO DE PARTE</div>
            500-834-AAAA
          </div>
          <div className="grid-itemPlantilla">
            <div className="tituloPlantilla">APLICACION</div>
            MICELA
          </div>
          <div className="grid-itemPlantilla">
            <div className="tituloPlantilla">UNIDAD DE MEDIDA </div>
            Pulgada cúbica [2 Pulgada cuadrada 3]
          </div>
        </div>
        <Divider fitted />
        <div className="GridContainerPlantilla">
          <div className="itemCampoComun">
            <Image src={DreyfusCentro} verticalAlign="middle" />
            <span>6101 - PUEBLA - LDC MEXICO SA de CV</span>
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
            <span>932342123 </span>
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
