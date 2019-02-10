import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { Tab, Input, Button } from "semantic-ui-react";
import Tarjetas from "../Tarjetas";
import "../Admin.css";
import { withFirebase } from "../../../Firebase";

const Nav = ({ firebase, match, history }) => {
  const panes = [
    {
      menuItem: "Pendientes",
      render: () => (
        <Tab.Pane attached={false}>
          <Tarjetas tarjetaSeleccionada={match.params.idSolicitud} />
        </Tab.Pane>
      )
    },
    {
      menuItem: "Procesadas",
      render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>
    }
  ];

  return (
    <Fragment>
      <Tab
        menu={{ secondary: true, pointing: true }}
        panes={panes}
        defaultActiveIndex={match.params.type === "procesadas" ? 1 : 0}
        onTabChange={() =>
          match.params.type === "procesadas"
            ? history.push("/admin/pendientes")
            : history.push("/admin/procesadas")
        }
      />
      <Input
        className="barraBusqueda"
        icon={{ name: "search", link: true }}
        placeholder="Search..."
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
