import React from "react";
import { Container, Button, Modal, Icon, Message } from "semantic-ui-react";

import { CopyToClipboard } from "react-copy-to-clipboard";

const ModalMessages = ({
  results,
  setLoading,
  setResults,
  submitSolicitud,
  reload
}) => {
  if (!results.success)
    return (
      <Modal.Content>
        <Message icon negative>
          <Icon name="close" />
          <Message.Content>
            <Message.Header>Su solicitud no ha sido enviada</Message.Header>
          </Message.Content>
        </Message>
        <Container textAlign="center">
          <Button
            onClick={() => {
              reload();
              setLoading(false);
              setResults(null);
            }}
          >
            Cargar otra solicitud
          </Button>
          <Button
            onClick={() => {
              submitSolicitud();
            }}
          >
            Volver a intentar
          </Button>
        </Container>
      </Modal.Content>
    );
  if (results.success)
    return (
      <Modal.Content>
        <Message icon positive>
          <Icon name="check" />
          <Message.Content>
            <Message.Header>
              Su solicitud fue enviada correctamente
            </Message.Header>
            Este es su número de seguimiento: {results.idSeguimiento}
          </Message.Content>
        </Message>
        <Container textAlign="center">
          <Button
            onClick={() => {
              reload();
              setLoading(false);
              setResults(null);
            }}
          >
            Cargar otra solicitud
          </Button>
          <CopyToClipboard text={results.idSeguimiento}>
            <Button>Copiar número de seguimiento</Button>
          </CopyToClipboard>
        </Container>
      </Modal.Content>
    );
};

export default ModalMessages;
