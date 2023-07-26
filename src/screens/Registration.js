import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  FormGroup,
  Form,
  Button,
} from "react-bootstrap";
import useTokenCheck from "../hooks/useTokenCheck";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";
function Registration() {
    // CommonJS
    const Swal = require("sweetalert2");
  const [identificationNumber, lastname, hospitalNumber] = useTokenCheck();
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [selectClinic, setSelectClinic] = useState("");
  const [selectDoctor, setSelectDoctor] = useState("");
  const [description, setDescription] = useState("");
  //======================== Regis ==============================//
  const handleRegister = (e) => {
    e.preventDefault();

    if (
      !appointmentDate ||
      !appointmentTime ||
      !selectClinic ||
      !selectDoctor ||
      !description
    ) {
      alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return;
    }

    const employeeData = {
      hospitalNumber: hospitalNumber,
      appointmentDate: appointmentDate,
      appointmentTime: appointmentTime,
      selectClinic: selectClinic,
      selectDoctor: selectDoctor,
      description: description,
    };

    console.log(employeeData);

    fetch("http://localhost:3000/addAppointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("ไม่สามารถบันทึกข้อมูลได้");
        }
        return response.json(); // แก้ไขเป็น response.json() เพื่อดึงข้อมูล JSON ที่ส่งกลับมาจากเซิร์ฟเวอร์
      })
      .then((data) => {
        
        console.log(data);
        Swal.fire(
          'Save Success',
          'You clicked the button!',
          'success'
        )
        handleCancel();
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops..."+ error.message,
          text: "Something went wrong!",
        });
        handleCancel();
      });
  };
  //=================================== Clear data ========================//
  const handleCancel = () => {
    setAppointmentDate("");
    setAppointmentTime("");
    setSelectClinic("");
    setSelectDoctor("");
  };
  //================================ handleAppointmentTimeChange=====================//

  const handleAppointmentDateChange = (event) => {
    setAppointmentDate(event.target.value);
  };

  const handleAppointmentTimeChange = (event) => {
    setAppointmentTime(event.target.value); // เพิ่มการ set ค่า appointmentTime ตามที่ผู้ใช้กรอก
  };

  const handleSelectClinicChange = (event) => {
    setSelectClinic(event.target.value);
  };
  const handleSelectDoctorChange = (event) => {
    setSelectDoctor(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
        <div className="container">
          <h1 className="mx-auto">ลงทะเบียนการนัด</h1>
        </div>
      </nav>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={6} lg={12}>
            <Card className="box-shadow">
              <Card.Body>
                <Row>
                  <Col xs={5}>
                    <strong>ชื่อ {identificationNumber}</strong>
                  </Col>
                  <Col xs={6}>
                    <strong>นามสกุล {lastname}</strong>
                  </Col>
                </Row>
                <Row>
                  <Col xs={5}>
                    <strong>HN {hospitalNumber}</strong>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={12}>
            <Card className="box-shadow mt-2">
              <Card.Body>
                <Form onSubmit={handleRegister}>
                  <Col>
                    <FormGroup>
                      <Form.Label>
                        <strong>วันที่นัด</strong>
                      </Form.Label>
                      <Form.Control
                        type="date"
                        value={appointmentDate}
                        onChange={handleAppointmentDateChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Form.Label>
                        <strong>เวลาที่นัด</strong>
                      </Form.Label>
                      <Form.Control
                        type="time"
                        value={appointmentTime}
                        onChange={handleAppointmentTimeChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Form.Label>
                        <strong>เลือกคลิลิก</strong>
                      </Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        value={selectClinic}
                        onChange={handleSelectClinicChange}
                      >
                        <option>เลือกคลิลิก.....</option>
                        <option value="อายุรกรรม">อายุรกรรม</option>
                      </Form.Select>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Form.Label>
                        <strong>เลือกหมอ</strong>
                      </Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        value={selectDoctor}
                        onChange={handleSelectDoctorChange}
                      >
                        <option>เลือกหมอ.....</option>
                        <option value="หมอฟัน">หมอฟัน</option>
                      </Form.Select>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Form.Label>
                        <strong>อาการเบื้องต้น</strong>
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={description}
                        onChange={handleDescriptionChange}
                      />
                    </FormGroup>
                  </Col>
                  <Row className="justify-content-center mt-3">
                    <Button type="submit" variant="success">
                      ยืนยัน
                    </Button>{" "}
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Registration;
