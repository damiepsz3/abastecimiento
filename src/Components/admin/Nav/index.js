import React, { Fragment, useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { compose } from "recompose";
import { Tab, Input, Button, Menu, Dropdown } from "semantic-ui-react";
import Tarjetas from "../Tarjetas";
import "../Admin.css";
import { withFirebase } from "../../../Firebase";

const Nav = ({ firebase, match, history }) => {
  const [solProc, setSolProc] = useState([]);
  const [solPen, setSolPen] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("createdDate");

  const panes = [
    {
      menuItem: (
        <Menu.Item key="1" as={Link} to="/admin/pendientes">
          {`Pendientes (${solPen.length})`}
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane attached={false}>
          <Tarjetas
            tarjetaSeleccionada={match.params.idSolicitud}
            solicitudes={
              search.length > 0
                ? solPen.filter(s => {
                    if (s.plantillaSeleccionada !== "") {
                      return (
                        s.nombreApellido.toLowerCase().includes(search) ||
                        s.opcionPlanta.toLowerCase().includes(search) ||
                        s.plantillaSeleccionada["Nombre Plantilla"]
                          .toLowerCase()
                          .includes(search) ||
                        s.plantillaSeleccionada["Taxonomia BOLD:Descripción"]
                          .toLowerCase()
                          .includes(search)
                      );
                    }
                    return (
                      s.nombreApellido.toLowerCase().includes(search) ||
                      s.opcionPlanta.toLowerCase().includes(search) ||
                      s.numeroMaterial.toLowerCase().includes(search)
                    );
                  })
                : solPen
            }
          />
        </Tab.Pane>
      )
    },
    {
      menuItem: (
        <Menu.Item key="2" as={Link} to="/admin/procesadas">
          {`Procesadas (${solProc.length})`}
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane attached={false}>
          <Tarjetas
            tarjetaSeleccionada={match.params.idSolicitud}
            solicitudes={solProc}
          />
        </Tab.Pane>
      )
    }
  ];

  // const parsingSol = (solicitudes) => {
  //   switch(filter) {
  //     case "fecha":
  //       solicitudes.sort((a,b) => {
  //         a.
  //       })
  //       break;
  //   }
  // }

  const filterOption = [
    { text: "Fecha", value: "createdDate" },
    { text: "Planta", value: "opcionPlanta" },
    { text: "Estado", value: "estado" }
  ];

  useEffect(() => {
    firebase.getSolicitudes().then(solicitudes => {
      console.log(solicitudes);
      setSolPen(solicitudes.filter(sol => sol.estado === "pendiente").sort());
      setSolProc(solicitudes.filter(sol => sol.estado !== "pendiente"));
    });
  }, []);

  return (
    <Fragment>
      <Tab
        menu={{ secondary: true, pointing: true }}
        panes={panes}
        defaultActiveIndex={match.params.type === "procesadas" ? 1 : 0}
      />
      <Input
        className="barraBusqueda"
        icon={{ name: "search", link: true }}
        placeholder="Search..."
        onChange={(e, { value }) => setSearch(value.toLowerCase())}
        value={search}
      />
      <Dropdown
        className="filtrarPor"
        placeholder="Ordenar por"
        selection
        options={
          match.params.type === "procesadas"
            ? filterOption
            : filterOption.filter(opt => opt.text !== "Estado")
        }
        onChange={(e, { value }) => setFilter(value)}
      />
      <Button
        className="cerrarSesion"
        content="Cerrar Sesion"
        icon="sign out"
        labelPosition="right"
        floated="right"
        onClick={() => firebase.doSignOut()}
      />
    </Fragment>
  );
};

export default compose(
  withFirebase,
  withRouter
)(Nav);
