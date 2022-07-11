import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddMovie = ({ add }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const navigate =useNavigate();

  const handleAdd = () => {
    let newMovie = { title, rate, description, posterUrl };
    add(newMovie);
  };
  const handleHome=()=>{
    navigate(`/`)
  }

  return (
    <div>

      <Modal.Dialog>
        <Modal.Header >
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
          <Button variant="secondary" onClick={handleHome}>
            Home
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default AddMovie;
