import React, { Component } from "react";
import { Grid, Header, Segment, Input, Loader } from "semantic-ui-react";

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

  formatListPlantillas = data =>
    data
      .reduce((acum, currentValue) => {
        //chequea que no se repita  ningun nombre de plantilla.
        if (
          !acum
            .map(a => a["Nombre Plantilla"])
            .includes(currentValue["Nombre Plantilla"])
        )
          acum.push(currentValue);
        return acum;
      }, [])
      .filter(
        //filtra por caratecres ingresados
        item =>
          item["Nombre Plantilla"]
            .toLowerCase()
            .search(this.state.query.toLowerCase()) !== -1
      )
      .sort(
        //ordenamiento alfabetico
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
          onClick={e => {
            this.setState({
              nombrePlantillaSeleccionada: plantilla
            });
            this.props.selectPlantilla("");
          }}
        >
          {plantilla["Nombre Plantilla"]}
        </Segment>
      ));

  formatListCategorias = data =>
    data
      .filter(
        row =>
          row["Nombre Plantilla"] ===
          this.state.nombrePlantillaSeleccionada["Nombre Plantilla"]
      )
      .map((plantilla, idx) => (
        <Segment
          className="segmentCategorias"
          key={idx}
          onClick={e => this.props.selectPlantilla(plantilla)}
        >
          {plantilla["Taxonomia BOLD:Descripción"]}
        </Segment>
      ));

  render() {
    const { data, loading } = this.props;
    const { nombrePlantillaSeleccionada } = this.state;
    console.log(loading);
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
                disabled={loading}
              />
              <div className="contenedorCategorias">
                {loading ? (
                  <Loader active size="big" />
                ) : (
                  this.formatListPlantillas(data)
                )}
              </div>
            </Segment.Group>
          </Grid.Column>

          <Grid.Column>
            {nombrePlantillaSeleccionada !== "" && (
              <React.Fragment>
                <Header as="h4">Seleccione Categoría</Header>
                <Segment.Group>{this.formatListCategorias(data)}</Segment.Group>
              </React.Fragment>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Plantilla;
