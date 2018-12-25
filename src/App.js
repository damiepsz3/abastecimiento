import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import Form from "./Components/formulario/Form";
import "./App.css";
import GoogleApi from "./GoogleApi";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plantillas: []
    };
  }

  componentDidMount() {
    GoogleApi.init().then(result => this.setState({ plantillas: result }));
  }

  render() {
    const { plantillas } = this.state;
    console.log();
    return (
      <Container>
        <Form data={plantillas} />
      </Container>
    );
  }
}

export default App;
