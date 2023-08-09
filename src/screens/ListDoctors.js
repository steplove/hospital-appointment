import React from "react";
import { Card, Container, Image } from "react-bootstrap";
import logo from "../images/dc.jpg";
import "../css/ListDoctors.css";
function ListDoctors() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light text-center">
        <div class="container">
          <h1 class="mx-auto">รายชื่อแพทย์</h1>
        </div>
      </nav>{" "}
      <br />
      <Container>
        <Card className="box-shadow">
        <div className="card-content mt-3">
          <Card.Img
            variant="top"
            src={logo}
            className="card-img-top"
            style={{ width: "300px", height: "300px" }}
          />
          <Card.Body>
            <h5>แพทย์หญิงกิจพร โฆษิตพิพัฒน์</h5>
            <h6>ศูนย์บริการทางการแพทย์ : ศูนย์ตาและผ่าตัดต้อกระจก</h6>
            <h6>ความชำนาญ : จักษุวิทยา</h6>
            <h6>ความชำนาญพิเศษ : ผ่าตัดต้อกระจก</h6>
          </Card.Body>
          </div>
        </Card>
      </Container>
    </>
  );
}

export default ListDoctors;
