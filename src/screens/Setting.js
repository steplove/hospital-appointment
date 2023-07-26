import React from "react";
import { Card, Row, Image, Col, Container, Button } from "react-bootstrap";
import logo from "../images/DSC_3422.jpg";
import useTokenCheck from "../hooks/useTokenCheck";
import Barcode from "react-barcode";
import Swal from "sweetalert2";
function Setting() {
  const Swal = require("sweetalert2");
  const [username, lastname, hn_id] = useTokenCheck();
  const handleLogout = () => {
    Swal.fire({
      icon: "success",
      title: "Logout Successful",
      text: "You have successfully logged out.",
    }).then(() => {
      localStorage.removeItem("token");
      window.location = "/login";
    });
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light text-center">
        <div class="container">
          <h1 class="mx-auto">จัดการข้อมูล</h1>
        </div>
      </nav>{" "}
      <br />
      <Card>
        <Card.Body>
          <Row>
            <Col xs={3} sm={3} md={3} lg={2}>
              <Image
                src={logo}
                roundedCircle
                style={{ width: "80px", height: "80px" }}
              />
            </Col>
            <Col xs={9} sm={9} md={9} lg={10} className="align-self-center">
              <span>
                ชื่อ {username} นามสกุล {lastname}
              </span>
              <p>hn {hn_id}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <br />
      <Container>
        <p>บาร์โค้ดของฉัน (My Barcode)</p>
      </Container>
      <Card>
        <Card.Body>
            <Barcode value={hn_id} format="CODE39" style={{width:"100px"}}/>
        </Card.Body>
      </Card>
      <br />
      <Container>
        <p>สำหรับคนไข้</p>
        <Card>
          <Card.Body className="card-box">
            <a href="/">
              <Row>
                <Col xs={3} sm={3} md={3} lg={2}>
                  <Image
                    src={logo}
                    roundedCircle
                    style={{ width: "50px", height: "50px" }}
                  />
                </Col>
                <Col xs={9} sm={9} md={9} lg={10} className="align-self-center">
                  <span>แพ้ยา/อาการไม่พึงประสงค์</span>
                  <p>Drug allergy/Side effects</p>
                </Col>
              </Row>
            </a>
            <div className="agreement-text w100"></div>
            <a href="/">
              <Row>
                <Col xs={3} sm={3} md={3} lg={2}>
                  <Image
                    src={logo}
                    roundedCircle
                    style={{ width: "50px", height: "50px" }}
                  />
                </Col>
                <Col xs={9} sm={9} md={9} lg={10} className="align-self-center">
                  <span>ครอบครัวของฉัน</span>
                  <p>My Family</p>
                </Col>
              </Row>
            </a>
            <div className="agreement-text w100"></div>
            <a href="/">
              <Row>
                <Col xs={3} sm={3} md={3} lg={2}>
                  <Image
                    src={logo}
                    roundedCircle
                    style={{ width: "50px", height: "50px" }}
                  />
                </Col>
                <Col xs={9} sm={9} md={9} lg={10} className="align-self-center">
                  <span>คนที่เพิ่มฉันเป็นครอบครัว</span>
                  <p>Where You are Active In</p>
                </Col>
              </Row>
            </a>
            <div className="agreement-text w100"></div>
            <a href="/">
              <Row>
                <Col xs={3} sm={3} md={3} lg={2}>
                  <Image
                    src={logo}
                    roundedCircle
                    style={{ width: "50px", height: "50px" }}
                  />
                </Col>
                <Col xs={9} sm={9} md={9} lg={10} className="align-self-center">
                  <span>การแจ้งเตือน</span>
                  <p>Notification</p>
                </Col>
              </Row>
            </a>
          </Card.Body>
        </Card>
      </Container>
      <div className="text-center mt-3">
        <Button variant="outline-danger justify-center" onClick={handleLogout}>
          {" "}
          ออกจากระบบ
        </Button>{" "}
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
}

export default Setting;
