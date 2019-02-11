import React, { Component } from "react";
import { Label, Divider, Image, Button, Icon } from "semantic-ui-react";
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

    this.state = {
      estado: ""
    };
  }

  render() {
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
            <span>Requiere Stock</span>
          </div>
          <div className="itemCampoComun">
            <Image src={DreyfusSector} verticalAlign="middle" />
            <span>Produc. / Operación Lagos </span>
          </div>
          <div className="itemCampoComun">
            <Image src={DreyfusDollar} verticalAlign="middle" />
            <span>142 </span>
          </div>
          <div className="itemCampoComun">
            <Image src={DreyfusVendedor} verticalAlign="middle" />
            <span>Bombas SRL </span>
          </div>

          <div className="itemCampoComun">
            <Image src={DreyfusTap} verticalAlign="middle" />
            <span>300 UNIDADES </span>
          </div>

          <div className="itemCampoComun">
            <Image src={DreyfusWrench} verticalAlign="middle" />
            <span>PRODUCTO REPARABLE </span>
          </div>
          <div className="itemCampoComun">
            <Image src={DreyfusBarcode} verticalAlign="middle" />
            <span>932342123 </span>
          </div>
        </div>
        <Divider fitted />

        <div className="BotonesEstados">
          <Button.Group>
            <Button className="Aceptar" onClick={this.props.cambiarEstado}>
              <Icon name="check" /> Aceptar
            </Button>
            <Button className="Pendiente" onClick={this.props.cambiarEstado}>
              <Icon name="clock" /> Pendiente
            </Button>

            <Button className="Rechazar" onClick={this.props.cambiarEstado}>
              <Icon name="times" /> Rechazar
            </Button>
          </Button.Group>
        </div>
      </div>
    );
  }
}

export default TarjetaAbierta;
