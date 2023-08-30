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
      <Card style={{ width: "90%", padding: "20px" }}>
        <Card.Body>
          <h5>การลงทะเบียนผู้ใช้ของคุณสำเร็จแล้ว </h5>{" "}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <Image src={logo} alt="Siburin Logo" style={{ width: "300px" }} />
          </div>
          <p>
            {" "}
            สมัครใช้บริการ Smart Apppointments เสร็จเรียบร้อย
            เพื่อความปลอดภัยของข้อมูลของท่าน กรุณาติดต่อเวชระเบียน
            เพื่อยืนยันตัวตนก่อนการใช้งานที่ เวรระเบียน ณ โรงพยาบาลเกษมราษฎร์
            ศรีบุรินทร์ ชั้น 1 อาคารศูนย์การแพทย์เฉพาะทาง{" "}
          </p>
          <p style={{ textAlign: "center" }}>หรือโทร 0-5391-0999</p>
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
