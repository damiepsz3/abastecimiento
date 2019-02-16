import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Form from "./Components/formulario/Form";
import Login from "./Components/admin/Login";
import Nav from "./Components/admin/Nav";
import ProtectedRoute from "./Components/admin";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Form} />
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/admin/:type" component={Nav} />
    </Switch>
  </Router>
);

export default App;
