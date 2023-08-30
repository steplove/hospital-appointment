import React, { useState } from "react";
import { Card, Row, Image, Col, Container, Button } from "react-bootstrap";
import logo from "../images/DSC_3422.jpg";
import useTokenCheck from "../hooks/useTokenCheck";
import Barcode from "react-barcode";
import Swal from "sweetalert2";
function Setting() {
  const [identificationNumber, lastname, hospitalNumber] = useTokenCheck();
  const initialLoggedInState = localStorage.getItem("token") ? true : false;
  const [isLoggedIn, setIsLoggedIn] = useState(initialLoggedInState);
  const handleLogout = () => {
    Swal.fire({
      icon: "warning",
      title: "ยืนยันการออกจากระบบ",
      text: "คุณแน่ใจว่าคุณต้องการที่จะออกจากระบบ?",
      showCancelButton: true,
      confirmButtonText: "ใช่, ออกจากระบบ",
      cancelButtonText: "ยกเลิก",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsLoggedIn(false);
        Swal.fire({
          icon: "success",
          title: "ออกจากระบบสำเร็จ",
          text: "คุณได้ออกจากระบบเรียบร้อยแล้ว",
          showConfirmButton: false,
        });

        // รอเวลา 2 วินาทีก่อนที่จะเปลี่ยนหน้า
        setTimeout(() => {
          const token = localStorage.getItem("token");
          if (token) {
            localStorage.removeItem("token");
            window.location = "/Agreement"; // เปลี่ยนหน้าไปยัง "/Login"
          } else {
            // Handle case where token is not found
            console.error("Token not found");
          }
        }, 2000);
      }
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
        <Card.Header
          className="text-center"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <h4>ข้อมูลส่วนตัว</h4>
        </Card.Header>
        <Card.Body>
          <Col xs={12} className="d-flex align-items-center">
            <Col xs={2}>
              <h6>ชื่อ</h6>
            </Col>
            <Col xs={4}>
              <strong>{identificationNumber}</strong>
            </Col>
            <Col xs={2} className="d-flex align-items-center">
              <h6>นามสกุล</h6>
            </Col>
            <Col xs={4}>
              <strong>{lastname}</strong>
            </Col>
          </Col>
          <Col xs={12} className="d-flex align-items-center">
            <Col xs={2}>
              <h6>HN</h6>
            </Col>
            <Col xs={4}>
              <strong>{hospitalNumber}</strong>
            </Col>
          </Col>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Header
          className="text-center"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <h4>บาร์โค้ดของฉัน (My Barcode)</h4>
        </Card.Header>
        <Card.Body>
          <Barcode
            value={hospitalNumber}
            format="CODE39"
            style={{ width: "100px" }}
          />
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body className="card-box">
          <Row
            className="d-flex align-items-center justify-content-start"
            style={{ marginRight: "13%" }}
          >
            <Col
              xs={3}
              sm={3}
              md={3}
              lg={2}
              className="d-flex align-items-center justify-content-start"
            >
              <Image
                src={logo}
                roundedCircle
                style={{ width: "50px", height: "50px" }}
              />
            </Col>
            <Col xs={9} sm={9} md={9} lg={10}>
              <span>แพ้ยา/อาการไม่พึงประสงค์</span>
              <p>Drug allergy/Side effects</p>
            </Col>
          </Row>
          <Row
            className="d-flex align-items-center justify-content-start"
            style={{ marginRight: "30%" }}
          >
            <Col xs={4} sm={3} md={3} lg={2}>
              <Image
                src={logo}
                roundedCircle
                style={{ width: "50px", height: "50px" }}
              />
            </Col>
            <Col xs={8} sm={9} md={9} lg={10}>
              <span>ครอบครัวของฉัน</span>
              <p>My Family</p>
            </Col>
          </Row>

          {/* <div className="agreement-text w100"></div>
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
            </a> */}
        </Card.Body>
      </Card>
      <div className="text-center mt-3">
        <Button variant="danger justify-center" onClick={handleLogout}>
          {" "}
          ออกจากระบบ
        </Button>{" "}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Setting;
