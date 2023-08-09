import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
function History() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
        <div className="container">
          <h1 className="mx-auto">ประวัติการรักษา</h1>
        </div>
      </nav>
      <br />
      <Card>
        <Card.Header
          className="text-center"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <h4>ข้อมูล</h4>
        </Card.Header>
        <Card.Body>
          <h5>แพ้ยา :</h5>
          <h5>โรคประจำตัว :</h5>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Header
          className="text-center"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <h4>ข้อมูลการรักษา</h4>
        </Card.Header>
        <Card.Body>
            
          <Button variant="primary" onClick={handleShow}>
            Launch static backdrop modal
          </Button>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default History;
