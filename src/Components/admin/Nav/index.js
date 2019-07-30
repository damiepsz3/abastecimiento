import React, { Component, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { compose } from "recompose";
import { Tab, Input, Button, Menu, Dropdown } from "semantic-ui-react";
import Tarjetas from "../Tarjetas";
import Download from "./Download";
import "../Admin.css";
import { withFirebase } from "../../../Firebase";

class Nav extends Component {
  state = {
    solProc: [],
    solPen: [],
    search: "",
    filter: "createdDate",
    loading: true
  };

  componentDidMount() {
    this.props.firebase.db.ref("solicitudes").on("value", snapshot => {
      const value = snapshot.val();
      console.log(value);
      if (value) {
        const solicitudes = Object.keys(value).map(k => {
          const { createdDate, ...rest } = value[k];
          return { id: k, createdDate: new Date(createdDate), ...rest };
        });
        this.setState({
          solPen: solicitudes
            .filter(sol => sol.estado === "pendiente")
            .sort(this.sortBy),
          solProc: solicitudes
            .filter(sol => sol.estado !== "pendiente")
            .sort(this.sortBy),
          loading: false
        });
      } else {
        this.setState({ loading: false, solProc: [] });
      }
    });
  }

  sortBy = (a, b) => {
    if (a[this.state.filter] > b[this.state.filter]) return -1;
    if (a[this.state.filter] < b[this.state.filter]) return 1;
    return 0;
  };

  filterOption = [
    { text: "Fecha", value: "createdDate" },
    { text: "Planta", value: "opcionPlanta" },
    { text: "Estado", value: "estado" }
  ];

  confirmarBorrado = () => {
    var r = window.confirm(
      "Esta operacion borrara todas las solicitudes procesadas y no se puede deshacer."
    );
    if (r == true) {
      this.props.firebase.deleteSolicitudes(this.state.solProc.map(s => s.id));
    }
  };

  render() {
    const panes = [
      {
        menuItem: (
          <Menu.Item key="1" as={Link} to="/admin/pendientes">
            {this.state.loading
              ? "Pendientes (...)"
              : `Pendientes (${this.state.solPen.length})`}
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane attached={false}>
            <Tarjetas
              tarjetaSeleccionada={this.props.match.params.idSolicitud}
              solicitudes={
                this.state.search.length > 0
                  ? this.state.solPen
                      .filter(s => {
                        if (s.plantillaSeleccionada !== "") {
                          return (
                            s.nombreApellido
                              .toLowerCase()
                              .includes(this.state.search) ||
                            s.opcionPlanta
                              .toLowerCase()
                              .includes(this.state.search) ||
                            s.id.toLowerCase().includes(this.state.search) ||
                            s.plantillaSeleccionada["Nombre Plantilla"]
                              .toLowerCase()
                              .includes(this.state.search) ||
                            s.plantillaSeleccionada[
                              "Taxonomia BOLD:Descripción"
                            ]
                              .toLowerCase()
                              .includes(this.state.search)
                          );
                        }
                        return (
                          s.nombreApellido
                            .toLowerCase()
                            .includes(this.state.search) ||
                          s.id.toLowerCase().includes(this.state.search) ||
                          s.opcionPlanta
                            .toLowerCase()
                            .includes(this.state.search) ||
                          s.numeroMaterial
                            .toLowerCase()
                            .includes(this.state.search)
                        );
                      })
                      .sort(this.sortBy)
                  : this.state.solPen.sort(this.sortBy)
              }
            />
          </Tab.Pane>
        )
      },
      {
        menuItem: (
          <Menu.Item key="2" as={Link} to="/admin/procesadas">
            {this.state.loading
              ? "Procesadas (...)"
              : `Procesadas (${this.state.solProc.length})`}
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane attached={false}>
            <Tarjetas
              tarjetaSeleccionada={this.props.match.params.idSolicitud}
              loading={this.state.loading}
              solicitudes={
                this.state.search.length > 0
                  ? this.state.solProc
                      .filter(s => {
                        if (s.plantillaSeleccionada !== "") {
                          return (
                            s.nombreApellido
                              .toLowerCase()
                              .includes(this.state.search) ||
                            s.opcionPlanta
                              .toLowerCase()
                              .includes(this.state.search) ||
                            s.id.toLowerCase().includes(this.state.search) ||
                            s.plantillaSeleccionada["Nombre Plantilla"]
                              .toLowerCase()
                              .includes(this.state.search) ||
                            s.plantillaSeleccionada[
                              "Taxonomia BOLD:Descripción"
                            ]
                              .toLowerCase()
                              .includes(this.state.search)
                          );
                        }
                        return (
                          s.nombreApellido
                            .toLowerCase()
                            .includes(this.state.search) ||
                          s.id.toLowerCase().includes(this.state.search) ||
                          s.opcionPlanta
                            .toLowerCase()
                            .includes(this.state.search) ||
                          s.numeroMaterial
                            .toLowerCase()
                            .includes(this.state.search)
                        );
                      })
                      .sort(this.sortBy)
                  : this.state.solProc.sort(this.sortBy)
              }
            />
          </Tab.Pane>
        )
      }
    ];
    console.log(this.props);
    return (
      <Fragment>
        <div className="topNavBar">
          <Tab
            menu={{ secondary: true, pointing: true }}
            panes={panes}
            defaultActiveIndex={
              this.props.match.params.type === "procesadas" ? 1 : 0
            }
          />
          {this.props.match.params.type === "procesadas" && (
            <Fragment>
              <Download solicitudes={this.state.solProc} />
              <Button
                className="Borrar"
                floated="right"
                icon="delete"
                onClick={() => this.confirmarBorrado()}
              />
            </Fragment>
          )}
          <Input
            className="barraBusqueda"
            icon={{ name: "search", link: true }}
            placeholder="Search..."
            onChange={(e, { value }) =>
              this.setState({ search: value.toLowerCase() })
            }
          />
          <Dropdown
            className="filtrarPor"
            placeholder="Ordenar por"
            selection
            options={
              this.props.match.params.type === "procesadas"
                ? this.filterOption
                : this.filterOption.filter(opt => opt.text !== "Estado")
            }
            onChange={(e, { value }) => this.setState({ filter: value })}
          />

          <Button
            className="cerrarSesion"
            floated="right"
            icon="sign out"
            onClick={() => this.props.firebase.doSignOut()}
          />
        </div>
      </Fragment>
    );
  }
}

export default compose(
  withFirebase,
  withRouter
)(Nav);
