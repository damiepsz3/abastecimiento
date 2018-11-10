import React, {Component} from "react";
import {Container} from "semantic-ui-react";

import Form from "./Components/formulario/Form"
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plantillas: []
    };
  }

  componentDidMount() {}

  render() {
    const {plantillas} = this.state;

    return (<Container>
      <Form/>
    </Container>);
  }
}

export default App;
