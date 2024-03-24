import { useState } from "react";
import { useNavigate } from "react-router";
import Loading from "./Loading";
import { Alert, Button, Modal } from "react-bootstrap";
import Error from "./Error";
import instance from "../utils/axios/instance";
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
      await instance.delete(`/decks/${deckId}`);

      setIsSuccess(true);

      setTimeout(() => {
        navigate("/top-decks");
      }, 500);
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
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={handleShow}
      >
        <i class="bi bi-trash3-fill"></i>
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        animation={false}
      >
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
