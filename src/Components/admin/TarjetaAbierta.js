import React, { Component } from "react";
import {
  Divider,
  Button,
  Icon,
  Form,
  Checkbox,
  Dropdown,
  TextArea,
  Input
} from "semantic-ui-react";
import {
  getDescripcion,
  getDescripcionCompleta
} from "../../utils/excelFormulas";
import sapLogo from "../../assets/sap.svg";
import GoogleApi from "../../GoogleApi";

import { withFirebase } from "../../Firebase";

class TarjetaAbierta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rechazando: false,
      razon: props.solicitud.razon,
      editMode: false,
      opcionesUnidadesDeMedida: []
    };
    this._handleDoubleClickItem = this._handleDoubleClickItem.bind(this);
  }

  componentDidMount() {
    GoogleApi.init("UnidadMedida").then(result =>
      this.setState({ opcionesUnidadesDeMedida: result })
    );
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

  handleEditar() {
    this.setState({ editMode: !this.state.editMode });
  }
  //this function is called to update caracterisitcas
  handleEditContent({ value, name }) {
    this.props.firebase.updateCaracteristica(
      this.props.solicitud.id,
      name,
      value.toUpperCase()
    );
    this.props.firebase.updateField(
      this.props.solicitud.id,
      "descripcion",
      getDescripcion(this.props.solicitud)
    );
    this.props.firebase.updateField(
      this.props.solicitud.id,
      "descripcionCompleta",
      getDescripcionCompleta(this.props.solicitud)
    );
  }

  handleEditField({ value, name }) {
    console.log("NAME:" + name);
    this.props.firebase.updateField(
      this.props.solicitud.id,
      name,
      value //.toUpperCase()
    );
  }

  _handleDoubleClickItem(event): void {
    this.setState({ editMode: true });
  }

  handleRazon(event) {
    this.setState({ razon: event.target.value });
  }

  render() {
    const { solicitud } = this.props;
    let camposDinamicos = [];
    if (solicitud.camposDinamicos) {
      //muestra las caracteristicas en modo edicion
      if (!this.state.editMode) {
        camposDinamicos = Object.keys(solicitud.camposDinamicos).map(
          caracteristica => (
            <div className="grid-itemPlantilla" key={caracteristica}>
              <div className="tituloPlantilla">{caracteristica}</div>
              <span onDoubleClick={this._handleDoubleClickItem}>
                {solicitud.camposDinamicos[caracteristica]}
              </span>
              <div className="spacer"></div>
            </div>
          )
        );
      } else {
        // muestra las caracteristicas sin edición
        camposDinamicos = Object.keys(solicitud.camposDinamicos).map(
          caracteristica => (
            <div className="grid-itemPlantilla" key={caracteristica}>
              <div className="tituloPlantilla">{caracteristica}</div>
              <Input
                fluid={true}
                className="input-caracteristica"
                value={solicitud.camposDinamicos[caracteristica]}
                control="input"
                name={caracteristica}
                onChange={(e, values) => this.handleEditContent(values)}
              />
            </div>
          )
        );
      }
    }

    return (
      <div className="TarjetaAbierta">
        {solicitud.camposDinamicos ? (
          <div className="tarjeta-row">
            <div>
              <div className="Plantilla">
                {solicitud.plantillaSeleccionada["Nombre Plantilla"]}
              </div>
              <div className="Categoria">
                {solicitud.plantillaSeleccionada["Taxonomia BOLD:Descripción"]}
              </div>
            </div>

            <div
              onClick={() => this.handleEditar()}
              className="edit-mode-toggle"
            >
              <label>Modo Edición</label>
              <Checkbox
                checked={this.state.editMode}
                onClick={() => this.handleEditar()}
                slider
              />
            </div>
          </div>
        ) : null}
        <div className="GridContainerPlantilla">
          {camposDinamicos}
          {/* cuando la socilitud tiene unidad de medida, es decir cuando la solicitud tiene una plantilla sel */}
          {solicitud.unidadMedida &&
            (this.state.editMode ? (
              <React.Fragment>
                <div className="grid-itemPlantilla">
                  <div className="tituloPlantilla">UNIDAD DE MEDIDA</div>
                  <Dropdown
                    placeholder="Seleccione"
                    fluid={true}
                    search={true}
                    value={solicitud.unidadMedida}
                    selection={true}
                    options={this.state.opcionesUnidadesDeMedida}
                    name="unidadMedida"
                    onChange={(e, { value }) => this.handleEditField(value)}
                  />
                </div>
                <div className="grid-itemPlantilla">
                  <div className="tituloPlantilla">DESCRIPCIÓN</div>
                  <Input
                    fluid={true}
                    className="input-caracteristica"
                    value={solicitud.descripcion}
                    control="input"
                    name="descripcion"
                    onChange={(e, values) => this.handleEditField(values)}
                  />
                </div>
                <div className="grid-itemPlantilla">
                  <div className="tituloPlantilla">DESCRIPCIÓN COMPLETA</div>
                  <Form>
                    <TextArea
                      className="input-caracteristica"
                      value={solicitud.descripcionCompleta}
                      control="input"
                      name="descripcionCompleta"
                      onChange={(e, values) => this.handleEditField(values)}
                    />
                  </Form>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="grid-itemPlantilla">
                  <div className="tituloPlantilla">UNIDAD DE MEDIDA</div>
                  <span>{solicitud.unidadMedida}</span>
                  <div className="spacer"></div>
                </div>
                <div className="grid-itemPlantilla">
                  <div className="tituloPlantilla">DESCRIPCIÓN</div>
                  <span>{solicitud.descripcion}</span>
                </div>
                <div className="grid-itemPlantilla">
                  <div className="tituloPlantilla">DESCRIPCIÓN COMPLETA</div>
                  <span>{solicitud.descripcionCompleta}</span>
                  <div className="spacer"></div>
                </div>
              </React.Fragment>
            ))}

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
            <div className="caract-comun">Planta</div>
            <span>{solicitud.opcionPlanta}</span>
          </div>

          <div className="itemCampoComun">
            <div className="caract-comun">Stock</div>

            <span>
              {solicitud.requiereStock ? "REQUIERE STOCK" : "NO REQUIERE STOCK"}
            </span>
          </div>
          <div className="itemCampoComun">
            <div className="caract-comun">Sector</div>

            <span>{solicitud.opcionSector} </span>
          </div>
          <div className="itemCampoComun">
            <div className="caract-comun">Precio en Moneda Local</div>

            <span>{solicitud.valorUSD} </span>
          </div>
          {solicitud.proveedor !== "" && (
            <div className="itemCampoComun">
              <div className="caract-comun">Proveedor</div>

              <span>{solicitud.proveedor}</span>
            </div>
          )}
          {solicitud.consumoAnual !== "No Aplica" && (
            <div className="itemCampoComun">
              <div className="caract-comun">Consumo Anual</div>

              <span>{solicitud.consumoAnual} </span>
            </div>
          )}

          <div className="itemCampoComun">
            <div className="caract-comun">Planta</div>
            <span>
              {solicitud.repara
                ? "PRODUCTO REPARABLE"
                : "PRODUCTO NO REPARABLE"}
            </span>
          </div>
          {solicitud.valorTAG && (
            <div className="itemCampoComun">
              <div className="caract-comun">TAG del Equipo que lo Utiliza</div>
              <span>{solicitud.valorTAG} </span>
            </div>
          )}
          <div className="itemCampoComun">
            <div className="caract-comun">Criticidad</div>
            <span className="CriticidadIcono">{solicitud.criticidad}</span>
          </div>

          <div className="itemCampoComun">
            <div className="caract-comun">Criticidad</div>
            <span className="CriticidadIcono">{solicitud.criticidad}</span>
          </div>

          <div className="itemCampoComun">
            <div className="caract-comun">Adjunto</div>
            <span className="CriticidadIcono">
              {solicitud.tieneAdjunto ? "Contiene adjunto" : "Sin Adjunto"}
            </span>
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
