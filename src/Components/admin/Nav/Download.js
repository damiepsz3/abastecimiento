import React from "react";
import ReactExport from "react-data-export";
import { Button } from "semantic-ui-react";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default class Download extends React.Component {
  render() {
    return (
      <ExcelFile
        element={
          <Button className="descargar" floated="right" icon="download" />
        }
      >
        <ExcelSheet data={this.props.solicitudes} name="Solicitudes">
          <ExcelColumn
            label="Material_a_solic"
            value={col =>
              col.estado === "rechazada"
                ? `Rechazada - ${col.razon}`
                : col.numeroMaterial
            }
          />
          <ExcelColumn label="Nombre_apellido" value="nombreApellido" />
          <ExcelColumn label="Mail_solicitante" value="email" />
          <ExcelColumn label="Fecha_pidio" value="createdDate" />

          <ExcelColumn
            label="Plantilla"
            value={col => col.plantillaSeleccionada["Nombre Plantilla"]}
          />
          <ExcelColumn
            label="Clas_n2_UNSPSC"
            value={col => col.plantillaSeleccionada["Taxonomia BOLD"]}
          />
          <ExcelColumn
            label="Caract_1"
            value={col => col.plantillaSeleccionada["Característica 1"]}
          />
          <ExcelColumn
            label="Val_caract_1"
            value={col =>
              !col.numeroMaterial
                ? col.camposDinamicos[
                    col.plantillaSeleccionada["Característica 1"]
                  ]
                : ""
            }
          />
          <ExcelColumn
            label="Caract_2"
            value={col => col.plantillaSeleccionada["Característica 2"]}
          />
          <ExcelColumn
            label="Val_caract_2"
            value={col =>
              !col.numeroMaterial
                ? col.camposDinamicos[
                    col.plantillaSeleccionada["Característica 2"]
                  ]
                : ""
            }
          />
          <ExcelColumn
            label="Caract_3"
            value={col => col.plantillaSeleccionada["Característica 3"]}
          />
          <ExcelColumn
            label="Val_caract_3"
            value={col =>
              !col.numeroMaterial
                ? col.camposDinamicos[
                    col.plantillaSeleccionada["Característica 3"]
                  ]
                : ""
            }
          />
          <ExcelColumn
            label="Caract_4"
            value={col => col.plantillaSeleccionada["Característica 4"]}
          />
          <ExcelColumn
            label="Val_caract_4"
            value={col =>
              !col.numeroMaterial
                ? col.camposDinamicos[
                    col.plantillaSeleccionada["Característica 4"]
                  ]
                : ""
            }
          />
          <ExcelColumn
            label="Caract_5"
            value={col => col.plantillaSeleccionada["Característica 5"]}
          />
          <ExcelColumn
            label="Val_caract_5"
            value={col =>
              !col.numeroMaterial
                ? col.camposDinamicos[
                    col.plantillaSeleccionada["Característica 5"]
                  ]
                : ""
            }
          />
          <ExcelColumn
            label="Caract_6"
            value={col => col.plantillaSeleccionada["Característica 6"]}
          />
          <ExcelColumn
            label="Val_caract_6"
            value={col =>
              !col.numeroMaterial
                ? col.camposDinamicos[
                    col.plantillaSeleccionada["Característica 6"]
                  ]
                : ""
            }
          />
          <ExcelColumn
            label="Normativa"
            value={col =>
              !col.numeroMaterial ? col.plantillaSeleccionada["Normativa"] : ""
            }
          />
          <ExcelColumn
            label="Unid_med_suj"
            value={col =>
              col.unidadMedida ? /\[([^)]+)\]/.exec(col.unidadMedida)[1] : ""
            }
          />

          <ExcelColumn label="Present" value="presentacion" />
          <ExcelColumn label="Homologado" value="" />
          <ExcelColumn label="Planta_req" value="opcionPlanta" />
          <ExcelColumn label="Sector_apr" value="opcionSector" />
          <ExcelColumn
            label="Criticidad"
            value={col => col.criticidad.charAt(1)}
          />
          <ExcelColumn
            label="Reparable"
            value={col => (col.repara ? "Si" : "No")}
          />
          <ExcelColumn label="TAG_utiliza" value="valorTAG" />
          <ExcelColumn label="Val_unit" value="valorUSD" />
          <ExcelColumn
            label="Req_stk"
            value={col => (col.requiereStock ? "Si" : "No")}
          />
          <ExcelColumn label="Cons_anual_est" value="consumoAnual" />
          <ExcelColumn label="Tiempo_aprovisionamiento" value="" />
          <ExcelColumn label="estado" value="estado" />
          <ExcelColumn label="Descripción" value={col => col.descripcion} />
          <ExcelColumn
            label="Descripción Completa"
            value={col => col.descripcionCompleta}
          />
          <ExcelColumn label="Texto Datos Básicos" value="" />
          <ExcelColumn label="Texto Ampliado" value="" />
        </ExcelSheet>
      </ExcelFile>
    );
  }
}
