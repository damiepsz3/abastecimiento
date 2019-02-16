import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import TarjetaCerrada from "./TarjetaCerrada";
import TarjetaAbierta from "./TarjetaAbierta";
import { withFirebase } from "../../Firebase";
class Tarjetas extends React.Component {
  constructor() {
    super();
    this.state = { expanded: null, estado: "aceptada", solicitudes: [] };
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  componentDidMount() {
    this.props.firebase
      .getSolicitudes()
      .then(solicitudes => this.setState({ solicitudes }))
      .catch(fail => console.log(fail));
  }

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    const ListaTarjetas = this.state.solicitudes.map(solicitud => (
      <ExpansionPanel
        key={solicitud.id}
        expanded={expanded === solicitud.id}
        onChange={this.handleChange(solicitud.id)}
      >
        <ExpansionPanelSummary className={solicitud.estado}>
          <TarjetaCerrada solicitud={solicitud} estado={solicitud.estado} />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TarjetaAbierta solicitud={solicitud} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ));

    return <div>{ListaTarjetas}</div>;
  }
}

export default withFirebase(Tarjetas);
