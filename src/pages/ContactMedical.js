import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import logo from "../images/unnamed.png";

function ContactMedical() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card style={{ maxWidth: "400px", width: "100%", padding: "20px" }}>
        <Card.Body>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <Image src={logo} alt="Siburin Logo" style={{ width: "300px" }} />
          </div>
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "red", marginRight: "8px" }}>❗</span>
            กรุณาติดต่อเวชระเบียน เพื่อยืนยันตัวตน
          </h2>
          <h3 style={{ textAlign: "center" }}>หรือโทร 0-5391-0999</h3>
          <a href="/Login" style={{ color: "white" }}>
            <Button variant="primary" style={{ width: "100%" }}>
              กลับสู่หน้าหลัก
            </Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ContactMedical;
