import React, { useState } from "react";
import {
  Card,
  Button,
  Modal,
  ToggleButton,
  ToggleButtonGroup,
  Row,
  Container,
} from "react-bootstrap";
import DetailModal from "../components/DetailModal";
import "../components/DetailModal.css";
function History() {
  const [showLabData, setShowLabData] = useState(false);
  const [showXRayData, setShowXRayData] = useState(false);
  const [selectedData, setSelectedData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [dataType, setDataType] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const labData = [
    {
      labCodeName: "Lab 1",
      resultClassifiedName: "Result 1",
      previousDate: "2023-08-09",
      previousResult: "Previous Result 1",
      resultValue: "Result Value 1",
      normalResultValue: "Normal Result Value 1",
      doctor: "Dr. John Doe",
    },
    {
      labCodeName: "Lab 2",
      resultClassifiedName: "Result 2",
      previousDate: "2023-08-08",
      previousResult: "Previous Result 2",
      resultValue: "Result Value 2",
      normalResultValue: "Normal Result Value 2",
      doctor: "Dr. Jane Smith",
    },
    // ... เพิ่มข้อมูล lab ตามต้องการ
  ];

  const xRayData = [
    {
      xRay: "X-Ray 1",
      xG: "XG 1",
      entryDate: "Entry Date 1",
      doctor: "Doctor 1",
    },
    {
      xRay: "X-Ray 2",
      xG: "XG 2",
      entryDate: "Entry Date 2",
      doctor: "Doctor 2",
    },
  ];

  const handleLabButtonClick = () => {
    setShowLabData(!showLabData);
    setShowXRayData(false);
  };

  const handleXSayButtonClick = () => {
    setShowXRayData(!showXRayData);
    setShowLabData(false);
  };

  const handleShowDetail = (data, type) => {
    setSelectedData(data);
    setDataType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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
          <h1>Lab and X-Say Data</h1>

          <ToggleButtonGroup type="checkbox" value={selectedButton}>
            <ToggleButton
              className="mb-2"
              id="toggle-check-lab"
              type="checkbox"
              variant={selectedButton === "lab" ? "dark" : "outline-dark"}
              value="lab"
              onChange={() => {}}
              onClick={() => {
                if (selectedButton === "lab") {
                  handleLabButtonClick();
                  setSelectedButton(null);
                } else {
                  handleLabButtonClick();
                  setSelectedButton("lab");
                }
              }}
            >
              {selectedButton === "lab" ? "✓ " : ""}Lab Data{" "}
            </ToggleButton>
            <ToggleButton
              className="mb-2"
              id="toggle-check-xray"
              type="checkbox"
              variant={selectedButton === "xray" ? "dark" : "outline-dark"}
              value="xray"
              onChange={() => {}}
              onClick={() => {
                if (selectedButton === "xray") {
                  handleXSayButtonClick();
                  setSelectedButton(null);
                } else {
                  handleXSayButtonClick();
                  setSelectedButton("xray");
                }
              }}
            >
              {selectedButton === "xray" ? "✓ " : ""}X-Ray Data{" "}
            </ToggleButton>
          </ToggleButtonGroup>

          {showLabData &&
            labData.map((item, index) => (
              <Container key={index}>
                <Row>
                  <Card xs={12} md={12} lg={12} className="mt-3">
                    <Card.Body>
                      <Row>
                        <div className="col-md-6">
                          <h3>LabName : {item.labCodeName}</h3>
                          <p>Lab : {item.resultClassifiedName}</p>
                          <p>EntryDate : {item.previousDate}</p>
                          <p>Doctor : {item.doctor}</p>
                        </div>
                        <div className="col-md-6">
                          <Button
                            variant="primary"
                            onClick={() =>
                              handleShowDetail([item], "Lab Result")
                            }
                          >
                            ดูผล Lab
                          </Button>
                        </div>
                      </Row>
                    </Card.Body>
                  </Card>
                </Row>
              </Container>
            ))}

          {showXRayData &&
            xRayData.map((item, index) => (
              <Container key={index}>
                <Row>
                  <Card xs={12} md={12} lg={12} className="mt-3">
                    <Card.Body>
                      <Row>
                        <div className="col-md-6">
                          <h3>X-Ray : {item.xRay}</h3>
                          <p>XG : {item.xG}</p>
                          <p>EntryDate : {item.entryDate}</p>
                          <p>Doctor : {item.doctor}</p>
                        </div>
                        <div className="col-md-6">
                          <Button
                            variant="primary"
                            onClick={() =>
                              handleShowDetail([item], "X-Ray Result")
                            }
                          >
                            แสดงรายละเอียด
                          </Button>
                        </div>
                      </Row>
                    </Card.Body>
                  </Card>
                </Row>
              </Container>
            ))}

          <DetailModal
            isOpen={modalOpen}
            onClose={closeModal}
            data={selectedData}
            dataType={dataType}
          />
        </Card.Body>
      </Card>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default History;
