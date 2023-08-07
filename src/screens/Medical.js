import React from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import useTokenCheck from "../hooks/useTokenCheck";
import logo from "../images/unnamed.png";

function Medical() {
  const [username, lastname] = useTokenCheck();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
        <div className="container">
          <h1 className="mx-auto">ตรวจรักษา</h1>
        </div>
      </nav>
      <br />
      <Container>
        <Card>
          <Card.Body>
            <Row className="justify-content-center align-items-center mt-2">
              <Col xs={2} md={4} className="text-center">
                <Image src={logo} roundedCircle style={{ width: "50px" }} />
              </Col>
              <Col
                xs={9}
                md={4}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <a href="/Registration">ลงทะเบียนตรวจ</a>
                <span>register</span>
              </Col>
            </Row>
            <Row className="justify-content-center align-items-center mt-2">
              <Col xs={2} md={4} className="text-center">
                <Image src={logo} roundedCircle style={{ width: "50px" }} />
              </Col>
              <Col
                xs={9}
                md={4}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <a href="/RegisterRecord">ประวัติการจองตรวจ</a>
                <span>Register record</span>
              </Col>
            </Row>
            <Row className="justify-content-center align-items-center mt-2">
              <Col xs={2} md={4} className="text-center">
                <Image src={logo} roundedCircle style={{ width: "50px" }} />
              </Col>
              <Col
                xs={9}
                md={4}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <a href="/Appointment">การนัดหมาย</a>
                <span>Appointment</span>
              </Col>
            </Row>
            <Row className="justify-content-center align-items-center mt-2">
              <Col xs={2} md={4} className="text-center">
                <Image src={logo} roundedCircle style={{ width: "50px" }} />
              </Col>
              <Col
                xs={9}
                md={4}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <a href="/ListDoctors">รายชื่อแพทย์</a>
                <span>Specialists</span>
              </Col>
            </Row>
            <br />
          </Card.Body>
        </Card>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
        <br />
      </Container>
    </>
  );
}

export default Medical;
