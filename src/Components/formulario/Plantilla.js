import React, {Component} from "react";
import config from "../../config"
import {Header, Grid, Segment} from "semantic-ui-react";
import "../../App.css";

class Plantilla extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categorias: [],
      plantillas: []
    };
  }

  componentDidMount() {

    console.log(process.env);
    // 1. Load the JavaScript client library.
    window.gapi.load("client", () => {
      // 2. Initialize the JavaScript client library.
      window.gapi.client.init({
        apiKey: config.apiKey,
        // Your API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: config.discoveryDocs
      }).then(() => {
        // 3. Initialize and make the API request.
        this.load(this.onLoad);
      });
    });
  }

  load = (callback) => {
    window.gapi.client.load("sheets", "v4 ", () => {
      window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId: config.spreadsheetId, range: "Sheet1!A1:R668"}).then(console.log);
    });
  }

  render() {
    const {plantillas} = this.state;

    return (<Grid>
      <Grid.Row>

        <Grid.Column width={8}>
          <Header as="h4">Seleccione Categoría</Header>
          <div className="contenedorCategorias">
            <Segment.Group>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
            </Segment.Group>
          </div>
        </Grid.Column>

        <Grid.Column width={8}>
          {
            plantillas.length !== 0 && (<Segment.Group>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
            </Segment.Group>)
          }
        </Grid.Column>
      </Grid.Row>
    </Grid>);
  }
}

export default Plantilla;
