import { useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import { Alert, Button, Modal, Form } from 'react-bootstrap';

function UpdateDeck({ token, deckId }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [archetypeId, setArchetypeId] = useState('');
  const [file, setFile] = useState(null);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name && !description && !archetypeId && !file) {
      alert('At least one field is required');
      return;
    }
    const formData = new FormData();

    if (name) formData.append('name', name);
    if (description) formData.append('description', description);
    if (archetypeId) formData.append('archetypeId', archetypeId);
    if (file) formData.append('file', file);

    try {
      setIsLoading(true);
      const response = await axios.patch(`${process.env.REACT_APP_API_URL}/decks/${deckId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token.access.token}`,
        },
      });

      if (response.status === 200) {
        setIsSuccess(true);

        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      setIsError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }

    handleClose();
  };

  return isLoading ? (
    <Loading />
  ) : isSuccess ? (
    <Alert variant="success">Deck updated! </Alert>
  ) : isError ? (
    <Alert variant="danger">{isError}</Alert>
  ) : (
    <>
      <Button variant="success" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" animation={false}>
        <div className="bg-black">
          <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {' '}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" value={description} onChange={(e) => setDescription(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Archetype ID</Form.Label>
                <Form.Control type="text" value={archetypeId} onChange={(e) => setArchetypeId(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="file-input">Upload File</Form.Label>
                <Form.Control id="file-input" type="file" onChange={handleFileChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

export default UpdateDeck;
