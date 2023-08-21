import React from "react";
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
            <Card className="card-container card-hover">
              <Card.Body className="card-body card-background-e7dcfc">
                <FcSurvey style={{ width: "100px", height: "100px" }} />
                <Card.Title>
                  <a href="/Registration" className="card-link">
                    ลงทะเบียนนัด
                  </a>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="text-center">
            <Card className="card-container card-hover">
              <Card.Body className="card-body card-background-d4d2f2">
                <FcOvertime style={{ width: "100px", height: "100px" }} />
                <Card.Title>
                  <a href="/RegisterRecord" className="card-link">
                    ประวัติการจอง
                  </a>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="row-cols-2 justify-content-center mt-2">
          <Col className="text-center">
            <Card className="card-container card-hover">
              <Card.Body className="card-body card-background-calendar">
                <FcCalendar style={{ width: "100px", height: "100px" }} />
                <Card.Title>
                  <a href="/Appointment" className="card-link">
                    การนัดหมาย
                  </a>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="text-center">
            <Card className="card-container card-hover">
              <Card.Body className="card-body card-background-conference">
                <FcConferenceCall style={{ width: "100px", height: "100px" }} />
                <Card.Title>
                  <a href="/ListDoctors" className="card-link">
                    รายชื่อแพทย์
                  </a>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="row-cols-2 justify-content-center mt-2">
          <Col className="text-center">
            <Card className="card-container card-hover">
              <Card.Body className="card-body card-background-reaction">
                <Image
                  src={drugLogo}
                  style={{ width: "100px", height: "100px" }}
                />
                <Card.Title>
                  <a href="/History" className="card-link">
                    ประวัติการรักษา
                  </a>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
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
