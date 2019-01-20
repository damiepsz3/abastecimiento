import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Form from "./Components/formulario/Form";
import Admin from "./Components/admin/";
import "./App.css";

const App = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Form} />
      <Route exact path="/admin" component={Admin} />
    </Fragment>
  </Router>
);

export default App;
