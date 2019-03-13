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

  render() {
    const { classes, solicitudes } = this.props;
    const { expanded } = this.state;

    const ListaTarjetas = solicitudes.map(solicitud => {
      return (
        <ExpansionPanel
          key={solicitud.id}
          expanded={expanded === solicitud.id}
          onChange={this.handleChange(solicitud.id)}
        >
          <ExpansionPanelSummary className={solicitud.estado}>
            <TarjetaCerrada solicitud={solicitud} estado={solicitud.estado} />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TarjetaAbierta
              solicitud={solicitud}
              cerrarPanel={this.handleChange(solicitud.id)}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
    });

    const NoHaySolicitudes = <h3> No hay solicitudes.. </h3>;

    return <div>{solicitudes.length ? ListaTarjetas : NoHaySolicitudes}</div>;
  }
}

export default withFirebase(Tarjetas);
