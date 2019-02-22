import React, { Fragment, useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { compose } from "recompose";
import { Tab, Input, Button, Menu, Dropdown } from "semantic-ui-react";
import Tarjetas from "../Tarjetas";
import "../Admin.css";
import { withFirebase } from "../../../Firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { parse } from "json2csv";

const Nav = ({ firebase, match, history }) => {
  const [solProc, setSolProc] = useState([]);
  const [solPen, setSolPen] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("createdDate");
  const { error, loading, value } = useCollection(
    firebase.db.collection("solicitudes")
  );

  const sortBy = (a, b) => {
    if (a[filter] > b[filter]) return -1;
    if (a[filter] < b[filter]) return 1;
    return 0;
  };

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
                ? solPen
                  .filter(s => {
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
                  .sort(sortBy)
                : solPen.sort(sortBy)
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
            solicitudes={
              search.length > 0
                ? solProc
                    .filter(s => {
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

  const descargar = () => {
    const json = solProc.map(s => {
      if (s.plantillaSeleccionada)
        return {
          Material_a_solic:
            s.estado === "rechazada"
              ? `Rechazada - ${s.razon}`
              : s.numeroMaterial,
          Nombre_apellido: s.nombreApellido,
          Mail_solicitante: s.email,
          Fecha_pidio: s.createdDate,
          Plantilla: s.plantillaSeleccionada["Nombre Plantilla"],
          Clas_n2_UNSPSC: s.plantillaSeleccionada["Taxonomia BOLD"],
          Caract_1: s.plantillaSeleccionada["Característica 1"],
          Val_caract_1:
            s.camposDinamicos[s.plantillaSeleccionada["Característica 1"]],
          Caract_2: s.plantillaSeleccionada["Característica 2"],
          Val_caract_2:
            s.camposDinamicos[s.plantillaSeleccionada["Característica 2"]],
          Caract_3: s.plantillaSeleccionada["Característica 3"],
          Val_caract_3:
            s.camposDinamicos[s.plantillaSeleccionada["Característica 3"]],
          Caract_4: s.plantillaSeleccionada["Característica 4"],
          Val_caract_4:
            s.camposDinamicos[s.plantillaSeleccionada["Característica 4"]],
          Caract_5: s.plantillaSeleccionada["Característica 5"],
          Val_caract_5:
            s.camposDinamicos[s.plantillaSeleccionada["Característica 5"]],
          Caract_5: s.plantillaSeleccionada["Característica 6"],
          Val_caract_1:
            s.camposDinamicos[s.plantillaSeleccionada["Característica 6"]],
          Unid_med_suj: s.unidadMedida,
          Present: s.presentacion,
          Homologado: null,
          Planta_req: s.opcionPlanta,
          Sector_apr: s.opcionSector,
          Criticidad: s.criticidad,
          Reparable: s.repara ? "Si" : "No",
          TAG_utiliza: s.valorTAG,
          Val_unit: s.valorUSD,
          Req_stk: s.requiereStock ? "Si" : "No",
          Cons_anual_est: s.requiereStock ? s.consumoAnual : null,
          Tiempo_aprovisionamiento: null,
          estado: s.estado,
          "Texto breve de material": "",
          "Texto Datos Básicos": "",
          "Texto Ampliado": ""
        };
      return {
        Material_a_solic:
          s.estado === "rechazada"
            ? `Rechazada - ${s.razon}`
            : s.numeroMaterial,
        Nombre_apellido: s.nombreApellido,
        Mail_solicitante: s.email,
        Fecha_pidio: s.createdDate,
        Plantilla: "",
        Clas_n2_UNSPSC: "",
        Caract_1: "",
        Val_caract_1: "",
        Caract_2: "",
        Val_caract_2: "",
        Caract_3: "",
        Val_caract_3: "",
        Caract_4: "",
        Val_caract_4: "",
        Caract_5: "",
        Val_caract_5: "",
        Caract_5: "",
        Val_caract_1: "",
        Unid_med_suj: s.unidadMedida,
        Present: s.presentacion,
        Homologado: null,
        Planta_req: s.opcionPlanta,
        Sector_apr: s.opcionSector,
        Criticidad: s.criticidad,
        Reparable: s.repara ? "Si" : "No",
        TAG_utiliza: s.valorTAG,
        Val_unit: s.valorUSD,
        Req_stk: s.requiereStock ? "Si" : "No",
        Cons_anual_est: s.requiereStock ? s.consumoAnual : null,
        Tiempo_aprovisionamiento: null,
        estado: s.estado,
        "Texto breve de material": "",
        "Texto Datos Básicos": "",
        "Texto Ampliado": ""
      };
    });
    try {
      const csv = parse(json);
      firebase.uploadCSV(csv);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(
    () => {
      if (!loading)
        if (!error) {
          const solicitudes = value.docs.map(doc => {
            const { createdDate, ...rest } = doc.data();
            return { id: doc.id, createdDate: createdDate.toDate(), ...rest };
          });
          setSolPen(
            solicitudes.filter(sol => sol.estado === "pendiente").sort(sortBy)
          );
          setSolProc(
            solicitudes.filter(sol => sol.estado !== "pendiente").sort(sortBy)
          );
          console.log(solicitudes);
        }
    },
    [value]
  );

  return (
    <Fragment>
      <div className="topNavBar">
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
        {match.params.type === "procesadas" && (
          <Button
            className="descargar"
            icon="download"
            onClick={() => descargar()}
          />
        )}
        <Button
          className="cerrarSesion"
          floated="right"
          icon="sign out"
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
