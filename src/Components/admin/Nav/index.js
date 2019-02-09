import React, { Component, Fragment } from "react";
import { Tab } from "semantic-ui-react";
import { Input } from "semantic-ui-react";
import Tarjetas from "../Tarjetas";
import "../Admin.css";

const panes = [
  {
    menuItem: "Pendientes",
    render: () => (
      <Tab.Pane attached={false}>
        <Tarjetas />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Procesadas",
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>
  }
];

const Nav = () => (
  <Fragment>
    <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    <Input
      className="barraBusqueda"
      icon={{ name: "search", link: true }}
      placeholder="Search..."
    />
  </Fragment>
);

export default Nav;
