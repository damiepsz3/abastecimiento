import React, { Fragment, useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { compose } from "recompose";
import { Tab, Input, Button, Menu, Dropdown, Icon } from "semantic-ui-react";
import Tarjetas from "../Tarjetas";
import Download from "./Download";
import "../Admin.css";

import { withFirebase } from "../../../Firebase";
import { useObjectVal } from "react-firebase-hooks/database";

const Nav = ({ firebase, match, history }) => {
  const [solProc, setSolProc] = useState([]);
  const [solPen, setSolPen] = useState([]);
  const [search, setSearch] = useState("");
  const [download, setDownload] = useState([]);
  const [filter, setFilter] = useState("createdDate");
  const { error, loading, value } = useObjectVal(
    firebase.db.ref("solicitudes")
  );

  if (!loading)
    if (!error && value) {
      const solicitudes = Object.keys(value).map(k => {
        const { createdDate, ...rest } = value[k];
        return { id: k, createdDate: new Date(createdDate), ...rest };
      });
      setSolPen(
        solicitudes.filter(sol => sol.estado === "pendiente").sort(sortBy)
      );
      setSolProc(
        solicitudes.filter(sol => sol.estado !== "pendiente").sort(sortBy)
      );
    }

  const sortBy = (a, b) => {
    if (a[filter] > b[filter]) return -1;
    if (a[filter] < b[filter]) return 1;
    return 0;
  };

  const panes = [
    {
      menuItem: (
        <Menu.Item key='1' as={Link} to='/admin/pendientes'>
          {loading ? "Pendientes (...)" : `Pendientes (${solPen.length})`}
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane attached={false}>
          <Tarjetas
            tarjetaSeleccionada={match.params.idSolicitud}
            solicitudes={
              search.length > 0
                ? solPen
                    .filter(s => {
                      if (s.plantillaSeleccionada !== "") {
                        return (
                          s.nombreApellido.toLowerCase().includes(search) ||
                          s.opcionPlanta.toLowerCase().includes(search) ||
                          s.id.toLowerCase().includes(search) ||
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
                        s.id.toLowerCase().includes(search) ||
                        s.opcionPlanta.toLowerCase().includes(search) ||
                        s.numeroMaterial.toLowerCase().includes(search)
                      );
                    })
                    .sort(sortBy)
                : solPen.sort(sortBy)
            }
          />
        </Tab.Pane>
      )
    },
    {
      menuItem: (
        <Menu.Item key='2' as={Link} to='/admin/procesadas'>
          {loading ? "Procesadas (...)" : `Procesadas (${solProc.length})`}
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane attached={false}>
          <Tarjetas
            tarjetaSeleccionada={match.params.idSolicitud}
            loading={loading}
            solicitudes={
              search.length > 0
                ? solProc
                    .filter(s => {
                      if (s.plantillaSeleccionada !== "") {
                        return (
                          s.nombreApellido.toLowerCase().includes(search) ||
                          s.opcionPlanta.toLowerCase().includes(search) ||
                          s.id.toLowerCase().includes(search) ||
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
                        s.id.toLowerCase().includes(search) ||
                        s.opcionPlanta.toLowerCase().includes(search) ||
                        s.numeroMaterial.toLowerCase().includes(search)
                      );
                    })
                    .sort(sortBy)
                : solProc.sort(sortBy)
            }
          />
        </Tab.Pane>
      )
    }
  ];

  const filterOption = [
    { text: "Fecha", value: "createdDate" },
    { text: "Planta", value: "opcionPlanta" },
    { text: "Estado", value: "estado" }
  ];

  //esta funcion saca el valor de la unidad de medida entre corchete. ej: para Kilogramo [KG] devuelve KG
  function obtenerValorEntreCorchetes(texto) {
    var valorEntreCorchetes = /\[([^)]+)\]/.exec(texto);
    if (valorEntreCorchetes) return valorEntreCorchetes[1];
    return texto;
  }

  // useEffect(() => {
  //   if (!loading)
  //     if (!error && value) {
  //       const solicitudes = Object.keys(value).map(k => {
  //         const { createdDate, ...rest } = value[k];
  //         return { id: k, createdDate: new Date(createdDate), ...rest };
  //       });

  //       setSolPen(
  //         solicitudes.filter(sol => sol.estado === "pendiente").sort(sortBy)
  //       );
  //       setSolProc(
  //         solicitudes.filter(sol => sol.estado !== "pendiente").sort(sortBy)
  //       );
  //     }
  // }, [value]);

  return (
    <Fragment>
      <div className='topNavBar'>
        <Tab
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          defaultActiveIndex={match.params.type === "procesadas" ? 1 : 0}
        />
        <Download solicitudes={solProc} />
        <Input
          className='barraBusqueda'
          icon={{ name: "search", link: true }}
          placeholder='Search...'
          onChange={(e, { value }) => setSearch(value.toLowerCase())}
          value={search}
        />
        <Dropdown
          className='filtrarPor'
          placeholder='Ordenar por'
          selection
          options={
            match.params.type === "procesadas"
              ? filterOption
              : filterOption.filter(opt => opt.text !== "Estado")
          }
          onChange={(e, { value }) => setFilter(value)}
        />
        <Button
          className='cerrarSesion'
          floated='right'
          icon='sign out'
          onClick={() => firebase.doSignOut()}
        />
      </div>
    </Fragment>
  );
};

export default compose(
  withFirebase,
  withRouter
)(Nav);
