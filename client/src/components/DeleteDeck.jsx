import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Loading from './Loading';
import { Alert, Button, Modal } from 'react-bootstrap';
import Error from './Error';
function DeleteDeck({ token, deckId }) {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async () => {
    handleClose();
    try {
      setIsLoading(true);
      await axios.delete(`${process.env.REACT_APP_API_URL}/decks/${deckId}`, {
        headers: {
          Authorization: `Bearer ${token?.access?.token}`,
        },
      });

      setIsSuccess(true);

      setTimeout(() => {
        navigate('/top-decks');
      }, 2000);
    } catch (error) {
      setIsError(error.response.status);
    } finally {
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <Loading />
  ) : isSuccess ? (
    <Alert variant="success">Deck deleted successfully </Alert>
  ) : isError ? (
    <Error code={isError} />
  ) : (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" animation={false}>
        <div className="bg-secondary">
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
        </div>
      </Modal>
    </>
  );
}

export default DeleteDeck;
