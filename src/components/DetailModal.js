import React from "react";
import { Modal, Button, Table, Card } from "react-bootstrap";

function DetailModal({ isOpen, onClose, data, dataType }) {
  return (
    <Modal show={isOpen} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{dataType}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {dataType === "Lab Result" ? (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>LABCodeName</th>
                <th>Result ClassifiedName</th>
                <th>Previous Date</th>
                <th>Previous Result</th>
                <th>Result Value</th>
                <th>Normal Result Value</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.labCodeName}</td>
                  <td>{item.resultClassifiedName}</td>
                  <td>{item.previousDate}</td>
                  <td>{item.previousResult}</td>
                  <td>{item.resultValue}</td>
                  <td>{item.normalResultValue}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <div>
            {data.map((item, index) => (
              <div key={index}>
                <p>X-ray : {item.xRay}</p>
                <p>XG : {item.xG}</p>
                <p>Confirm Result DateTime : {item.entryDate}</p>
                <Card>
                  <Card.Body>
                    รายละเอียดต่างๆ
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          ปิด
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DetailModal;
