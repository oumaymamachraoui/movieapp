import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddMovie = ({ add }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [posterUrl, setPosterUrl] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleTitle = (e) => {
  //   setTitle(e.target.value);
  // };
  // const handleDescription =(e)=>{
  //   setDescription(e.target.value)
  // }
  // const handleRate =(e)=>{
  //   setRate(e.target.value)
  // }
  // const handlePosterUrl =(e)=>{
  //   setPosterUrl(e.target.value)
  // }

  const handleAdd = () => {
    let newMovie = { title, rate, description, posterUrl };
    add(newMovie);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Ajouter un film
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Movie title</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />

          <Form.Label>Movie description</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          />

          <Form.Label>Movie rate</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => {
              setRate(e.target.value);
            }}
            value={rate}
          />

          <Form.Label>Movie posterUrl</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setPosterUrl(e.target.value);
            }}
            value={posterUrl}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
