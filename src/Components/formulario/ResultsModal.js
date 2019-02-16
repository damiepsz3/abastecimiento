import React, { useState, Fragment } from "react";
import {
  Container,
  Table,
  Button,
  Modal,
  Dimmer,
  Loader,
  Icon,
  Message
} from "semantic-ui-react";
import { withFirebase } from "../../Firebase";

const ResultsModal = ({ firebase, solicitud, open, handleOpenModal }) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  return (
    <Modal
      onOpen={handleOpenModal}
      onClose={handleOpenModal}
      closeOnEscape
      closeOnDimmerClick
      open={open}
      closeIcon
    >
      <Dimmer active={loading}>
        <Loader size="large">Subiendo solicitud</Loader>
      </Dimmer>
      {results ? (
        <Modal.Content>
          <Message icon positive>
            <Icon name="check" />
            <Message.Content>
              <Message.Header>
                Su solicitud fue enviada correctamente
              </Message.Header>
              Este es su numero de seguimiento: {results.idSeguimiento}
            </Message.Content>
          </Message>
        </Modal.Content>
      ) : (
        <Fragment>
          <Modal.Header>Informacion recolectada en el formulario</Modal.Header>
          <Modal.Content>
            <Table celled striped>
              <Table.Body>
                <Table.Row>
                  <Table.Cell collapsing>Nombre y Apellido</Table.Cell>
                  <Table.Cell>{solicitud.nombreApellido}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Email</Table.Cell>
                  <Table.Cell>{solicitud.email}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Número de material a solicitar</Table.Cell>
                  <Table.Cell>{solicitud.numeroMaterial}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell> Plantilla Seleccionada </Table.Cell>
                  <Table.Cell>
                    {solicitud.plantillaSeleccionada["Nombre Plantilla"]}
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Categoría Seleccionada</Table.Cell>
                  <Table.Cell>
                    {" "}
                    {
                      solicitud.plantillaSeleccionada[
                        "Taxonomia BOLD:Descripción"
                      ]
                    }
                  </Table.Cell>
                </Table.Row>
                {Object.keys(solicitud.camposDinamicos).map((cd, idx) => (
                  <Table.Row key={idx}>
                    <Table.Cell>{cd}</Table.Cell>
                    <Table.Cell>{solicitud.camposDinamicos[cd]}</Table.Cell>
                  </Table.Row>
                ))}
                <Table.Row>
                  <Table.Cell>Proveedor/ Marca Sugeridos</Table.Cell>
                  <Table.Cell>{solicitud.proveedor}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Presentación</Table.Cell>
                  <Table.Cell>{solicitud.presentacion}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Planta</Table.Cell>
                  <Table.Cell>{solicitud.opcionPlanta}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Sector</Table.Cell>
                  <Table.Cell>{solicitud.opcionSector}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Criticidad</Table.Cell>
                  <Table.Cell>{solicitud.criticidad}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>¿Se Repara?</Table.Cell>
                  <Table.Cell>{solicitud.repara ? "Si" : "No"}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Valor Unitario (U$D)</Table.Cell>
                  <Table.Cell>{solicitud.valorUSD}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>TAG de equipo que lo utiliza</Table.Cell>
                  <Table.Cell>{solicitud.valorTAG}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>¿Requiere Stock? </Table.Cell>
                  <Table.Cell>
                    {solicitud.requiereStock ? "Si" : "No"}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Consumo Anual Esperable</Table.Cell>
                  <Table.Cell>{solicitud.consumoAnual}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Container textAlign="center">
              <Button
                positive
                onClick={() => {
                  const {
                    errors,
                    open,
                    conoceCodigo,
                    plantillas,
                    loadingPlantillas,
                    ...rest
                  } = solicitud;
                  setLoading(true);
                  firebase
                    .addSolicitud({ estado: "pendiente", ...rest })
                    .then(response => {
                      setLoading(false);
                      console.log(response);
                      setResults({
                        success: true,
                        idSeguimiento: response.id
                      });
                    })
                    .catch(error => console.log(error));
                }}
              >
                Confirmar
              </Button>
              <Button negative onClick={() => handleOpenModal()}>
                Cancelar
              </Button>
            </Container>
          </Modal.Content>
        </Fragment>
      )}
    </Modal>
  );
};

export default withFirebase(ResultsModal);