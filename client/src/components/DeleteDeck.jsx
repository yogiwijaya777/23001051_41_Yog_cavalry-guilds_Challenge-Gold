import { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router';
import Loading from './Loading';
import { Alert, Button, Modal } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

function DeleteDeck() {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const { token } = useAuth();
  const navigate = useNavigate();
  const deckId = useLocation().pathname.split('/')[2];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async () => {
    handleClose();
    try {
      setIsLoading(true);
      await axios.delete(`${process.env.REACT_APP_API_URL}/deScks/${deckId}`, {
        headers: {
          Authorization: `Bearer ${token.access.token}`,
        },
      });

      setIsSuccess(true);

      setTimeout(() => {
        navigate('/top-decks');
      }, 2000);
    } catch (error) {
      setIsError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <Loading />
  ) : isSuccess ? (
    <Alert variant="success">Deck deleted successfully </Alert>
  ) : isError ? (
    <Alert variant="danger">{isError}</Alert>
  ) : (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" animation={false}>
        <div className="bg-black">
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
