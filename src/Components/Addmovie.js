import React, { useState } from "react";
import { Button, Col, Modal, Form } from "react-bootstrap";
const Addmovie = ({ setMovies, moviesinfo }) => {
  const [name, setname] = useState("");
  const [img, setimg] = useState("");
  const [rate, setrate] = useState(0);
  const [description, setdescription] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addmovie = () => {
    const newmovie = {
      name: name,
      imgurl: img,
      rate: rate,
      description: description,
    };
    setMovies([...moviesinfo, newmovie]);
    handleClose();
  };
  return (
    <div>
      <Button variant="outline-success" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ justifyContent: "center" }}>
          <Modal.Title>Add New Movie To The List </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col sm="15" style={{ margin: "5px" }}>
            <Form.Control
              type="text"
              placeholder="Enter The movie name"
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </Col>
          <Col sm="15" style={{ margin: "5px" }}>
            <Form.Control
              type="text"
              placeholder="Enter The movie image (url)"
              onChange={(e) => {
                setimg(e.target.value);
              }}
            />
          </Col>
          <Col sm="15" style={{ margin: "5px" }}>
            <Form.Control
              type="number"
              min="1"
              max="5"
              placeholder="Rate The movie from 1 To 5"
              onChange={(e) => {
                setrate(Number(e.target.value));
              }}
            />
          </Col>
          <Col sm="15" style={{ margin: "5px" }}>
            <Form.Control
              style={{ height: "100px" }}
              type="comment"
              placeholder="Enter The movie description"
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
          </Col>
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "center" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addmovie}>
            Save Adds
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Addmovie;
