import { useState } from 'react';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router';
import Loading from './Loading';
import { Alert, Button, Modal } from 'react-bootstrap';

function DeleteDeck() {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  // const navigate = useNavigate();
  // const deckId = useLocation().pathname.split('/')[2];
  const deckId = 'beb60df8-f3ef-453c-9064-8ae8b459f1a6';

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async () => {
    handleClose();
    try {
      setIsLoading(true);
      await axios.delete(`${process.env.REACT_APP_API_URL}/decks/${deckId}`);

      setIsSuccess(true);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <Loading />
  ) : isSuccess ? (
    <Alert variant="success">Deck deleted successfully </Alert>
  ) : isError ? (
    <Alert variant="danger">Error deleting deck</Alert>
  ) : (
    <>
      <Button variant="primary" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleSubmit}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteDeck;
