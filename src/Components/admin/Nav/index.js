import React, { Fragment, useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { compose } from "recompose";
import { Tab, Input, Button, Menu } from "semantic-ui-react";
import Tarjetas from "../Tarjetas";
import "../Admin.css";
import { withFirebase } from "../../../Firebase";

const Nav = ({ firebase, match, history }) => {
  const [solProc, setSolProc] = useState([]);
  const [solPen, setSolPen] = useState([]);
  const [search, setSearch] = useState("");
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

  useEffect(() => {
    firebase.getSolicitudes().then(solicitudes => {
      console.log(solicitudes);
      setSolPen(solicitudes.filter(sol => sol.estado === "pendiente"));
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
