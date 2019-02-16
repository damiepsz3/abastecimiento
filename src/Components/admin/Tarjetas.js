import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import TarjetaCerrada from "./TarjetaCerrada";
import TarjetaAbierta from "./TarjetaAbierta";

class Tarjetas extends React.Component {
  constructor() {
    super();
    this.state = { expanded: null, estado: null };
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      estado: null,
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div>
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={this.handleChange("panel1")}
        >
          <ExpansionPanelSummary>
            <TarjetaCerrada />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TarjetaAbierta />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={this.handleChange("panel2")}
        >
          <ExpansionPanelSummary>
            <TarjetaCerrada />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TarjetaAbierta />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default Tarjetas;
