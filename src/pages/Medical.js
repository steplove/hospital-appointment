import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import useTokenCheck from "../hooks/useTokenCheck";
import {
  FcSurvey,
  FcConferenceCall,
  FcCalendar,
  FcOvertime,
} from "react-icons/fc";
import "../css/Medical.css";
import drugLogo from "../images/drug.png";
import queLogo from "../images/question-mark-circle-outline_1.png";
function Medical() {
  useTokenCheck();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
        <div className="container">
          <h1 className="mx-auto">เมนู</h1>
        </div>
      </nav>
      <br />
      <Container>
        <Row className="row-cols-2 justify-content-center">
          <Col className="text-center">
            <Link to="/Registration" className="card-link">
              <Card className="card-container card-hover">
                <Card.Body className="card-body card-background-e7dcfc">
                  <FcSurvey style={{ width: "100px", height: "100px" }} />
                  <Card.Title style={{ color: "white" }}>
                    ลงทะเบียนการนัด
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col className="text-center">
            <Link to="/RegisterRecord" className="card-link">
              <Card className="card-container card-hover">
                <Card.Body className="card-body card-background-d4d2f2">
                  <FcOvertime style={{ width: "100px", height: "100px" }} />
                  <Card.Title style={{ color: "white" }}>
                    ประวัติการจอง
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
        <Row className="row-cols-2 justify-content-center mt-2">
          <Link to="/Appointment" className="card-link">
            <Col className="text-center">
              <Card className="card-container card-hover">
                <Card.Body className="card-body card-background-calendar">
                  <FcCalendar style={{ width: "100px", height: "100px" }} />
                  <Card.Title style={{ color: "white" }}>การนัดหมาย</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Link>
          <Link to="/ListDoctors" className="card-link">
            <Col className="text-center">
              <Card className="card-container card-hover">
                <Card.Body className="card-body card-background-conference">
                  <FcConferenceCall
                    style={{ width: "100px", height: "100px" }}
                  />
                  <Card.Title style={{ color: "white" }}>
                    รายชื่อแพทย์
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Link>
        </Row>
        <Row className="row-cols-2 justify-content-center mt-2">
          <Link to="/History" className="card-link">
            <Col className="text-center">
              <Card className="card-container card-hover">
                <Card.Body className="card-body card-background-reaction">
                  <Image
                    src={drugLogo}
                    style={{ width: "100px", height: "100px" }}
                  />
                  <Card.Title style={{ color: "white" }}>
                    ประวัติการรักษา
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Link>

          <Col className="text-center">
            <Card className="card-container card-hover">
              <Card.Body
                className="card-body card-background-conference"
                disabled
              >
                <Image
                  src={queLogo}
                  style={{ width: "100px", height: "100px" }}
                />
                <Card.Title>about.</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Medical;
