import React, { Component } from "react";
import { Grid, Header, Segment, Input } from "semantic-ui-react";

class Plantilla extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      nombrePlantillaSeleccionada: ""
    };
  }

  handleSearch = (e, { value }) => {
    this.setState({ query: value });
  };

  render() {
    const { data, selectPlantilla, plantillaSeleccionada } = this.props;
    const { query, nombrePlantillaSeleccionada } = this.state;

    return (
      <Grid>
        <Grid.Row columns="equal">
          <Grid.Column>
            <Header as="h4">Seleccione Plantilla</Header>
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
                  .sort(
                    (a, b) =>
                      a["Nombre Plantilla"].toUpperCase() <
                      b["Nombre Plantilla"].toUpperCase()
                        ? -1
                        : 1
                  )
                  .map((plantilla, idx) => (
                    <Segment
                      className="segmentCategorias"
                      key={idx}
                      onClick={e =>
                        this.setState({
                          nombrePlantillaSeleccionada: plantilla
                        })
                      }
                    >
                      {plantilla["Nombre Plantilla"]}
                    </Segment>
                  ))}
              </div>
            </Segment.Group>
          </Grid.Column>

          <Grid.Column>
            {nombrePlantillaSeleccionada !== "" && (
              <React.Fragment>
                <Header as="h4">Seleccione Categoría</Header>
                <Segment.Group>
                  {data
                    .filter(
                      row =>
                        row["Nombre Plantilla"] ===
                        nombrePlantillaSeleccionada["Nombre Plantilla"]
                    )
                    .map((plantilla, idx) => (
                      <Segment
                        className="segmentCategorias"
                        key={idx}
                        onClick={e => selectPlantilla(plantilla)}
                      >
                        {plantilla["Taxonomia BOLD:Descripción"]}
                      </Segment>
                    ))}
                </Segment.Group>
              </React.Fragment>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Plantilla;
