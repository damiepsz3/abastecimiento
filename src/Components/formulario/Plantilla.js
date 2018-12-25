import React, { Component } from "react";
import { Grid, Header, Segment, Input } from "semantic-ui-react";

class Plantilla extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
  }

  handleSearch = (e, { value }) => {
    this.setState({ query: value });
  };

  render() {
    const { data } = this.props;
    const { query } = this.state;

    return (
      <Grid>
        <Grid.Row columns="equal">
          <Grid.Column>
            <Header as="h4">Seleccione Categoría</Header>
            <Segment.Group>
              <Input
                className="searchCategoria"
                action={{ icon: "search" }}
                placeholder="Buscar..."
                fluid
                onChange={this.handleSearch}
              />
              <div className="contenedorCategorias">
                {data
                  .filter(
                    item =>
                      item["Nombre Plantilla"].toLowerCase().search(query) !==
                      -1
                  )
                  .map((plantilla, idx) => (
                    <Segment className="segmentCategorias" key={idx}>
                      {plantilla["Nombre Plantilla"]}
                    </Segment>
                  ))}
              </div>
            </Segment.Group>
          </Grid.Column>

          <Header as="h4" />
          <Grid.Column>
            <Segment.Group>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
              <Segment>Content</Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Plantilla;
