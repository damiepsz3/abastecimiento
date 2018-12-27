import React, { Component } from "react";
import {
  Grid,
  Header,
  Segment,
  Input,
  Loader,
  Image,
  Container,
  Icon
} from "semantic-ui-react";
import selectCategoria from "../../assets/select_categoria.png";

class Plantilla extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      nombrePlantillaSeleccionada: {},
      idxPlantillaSeleccionada: null,
      idxCategoriaSeleccionada: null
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
            .search(this.state.query.toLowerCase()) !== -1 ||
          item["Taxonomia BOLD:Descripción"]
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
              nombrePlantillaSeleccionada: plantilla,
              idxPlantillaSeleccionada: idx,
              idxCategoriaSeleccionada: null
            });
            this.props.selectPlantilla("plantillaSeleccionada", "");
          }}
          color={this.state.idxPlantillaSeleccionada === idx ? "blue" : null}
          inverted={this.state.idxPlantillaSeleccionada === idx && true}
        >
          {plantilla["Nombre Plantilla"]}
          {this.state.idxPlantillaSeleccionada === idx && (
            <Icon
              name="check"
              inverted
              style={{ position: "absolute", right: 0, marginRight: 10 }}
            />
          )}
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
          onClick={e => {
            this.props.selectPlantilla("plantillaSeleccionada", plantilla);
            this.setState({ idxCategoriaSeleccionada: idx });
          }}
          color={this.state.idxCategoriaSeleccionada === idx ? "blue" : null}
          inverted={this.state.idxCategoriaSeleccionada === idx && true}
        >
          {plantilla["Taxonomia BOLD:Descripción"]}
          {this.state.idxCategoriaSeleccionada === idx && (
            <Icon
              name="check"
              inverted
              style={{ position: "absolute", right: 0, marginRight: 10 }}
            />
          )}
        </Segment>
      ));

  render() {
    const { data, loading } = this.props;
    const { nombrePlantillaSeleccionada } = this.state;

    return (
      <Grid stackable>
        <Grid.Row columns="equal">
          <Grid.Column>
            <Header as="h4">Seleccione Plantilla</Header>
            <Segment.Group>
              <Input
                className="searchCategoria"
                icon="search"
                placeholder="Buscar..."
                fluid
                onChange={this.handleSearch}
                disabled={loading}
              />
              {loading ? (
                <div
                  className="contenedorPlantillas"
                  style={{ overflowY: "hidden" }}
                >
                  <Loader active size="big" />
                </div>
              ) : (
                <div className="contenedorPlantillas">
                  {this.formatListPlantillas(data)}
                </div>
              )}
            </Segment.Group>
          </Grid.Column>

          <Grid.Column>
            <Header as="h4">Seleccione Categoría</Header>
            <Segment.Group>
              <div
                className="contenedorCategorias"
                style={{ height: 558, overflowY: "hidden", borderTop: 0 }}
              >
                {Object.keys(nombrePlantillaSeleccionada).length > 0 ? (
                  this.formatListCategorias(data)
                ) : (
                  <Container style={{ marginTop: 184 }}>
                    <Image src={selectCategoria} size="small" centered />
                    <Header as="h4" textAlign="center" disabled>
                      Seleccione una plantilla para poder elegir una categoría.
                    </Header>
                  </Container>
                )}
              </div>
            </Segment.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Plantilla;
