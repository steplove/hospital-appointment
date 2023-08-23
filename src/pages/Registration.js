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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useTokenCheck from "../hooks/useTokenCheck";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";
import { BASE_URL } from "../constants/constants";
function Registration() {
  // CommonJS
  const Swal = require("sweetalert2");
  const [identificationNumber, lastname, hospitalNumber] = useTokenCheck();
  const [appointmentDate, setAppointmentDate] = useState("");
  const [selectClinic, setSelectClinic] = useState("");
  const [selectDoctor, setSelectDoctor] = useState("");
  const [description, setDescription] = useState("");
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  //======================== Regis ==============================//
  const handleRegister = (e) => {
    e.preventDefault();

    if (
      !appointmentDate ||
      !selectedAppointmentTime ||
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
      appointmentTime: selectedAppointmentTime,
      selectClinic: selectClinic,
      selectDoctor: selectDoctor,
      description: description,
    };

    console.log(employeeData);

    fetch(BASE_URL + "/api/addAppointment", {
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
        Swal.fire({
          title: "บันทึกสำเร็จ",
          icon: "success",
        }).then(() => {
          window.location = "/Medical";
        });

        handleCancel();
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops..." + error.message,
          text: "Something went wrong!",
        });
        handleCancel();
      });
  };
  //=================================== Clear data ========================//
  const handleCancel = () => {
    setAppointmentDate("");
    setSelectedAppointmentTime("");
    setSelectClinic("");
    setSelectDoctor("");
    setDescription("");
  };
  //================================ handleAppointmentTimeChange=====================//

  const [selectedAppointmentTime, setSelectedAppointmentTime] = useState(null);
  //======================== Date ==============================//

  const handleDateChange = (date) => {
    console.log("Selected date:", date);
    setAppointmentDate(date);
  };
  const handleToggleAppointmentTime = (time) => {
    if (selectedAppointmentTime === time) {
      setSelectedAppointmentTime(null); // ยกเลิกการเลือก
    } else {
      setSelectedAppointmentTime(time);
    }
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
  const timeSlots = [
    { label: "09.00-10.00", value: "09:00" },
    { label: "10.00-11.00", value: "10:00" },
    { label: "11.00-12.00", value: "11:00" },
    { label: "13.00-14.00", value: "13:00" },
    { label: "14.00-15.00", value: "14:00" },
    { label: "15.00-16.00", value: "15:00" },
  ];
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
              <Card.Header
                className="text-center"
                style={{ backgroundColor: "black", color: "white" }}
              >
                <h4>ข้อมูล</h4>
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
          </Col>
          <Col xs={12} md={6} lg={12}>
            <Card className="mt-2">
              <Card.Header
                className="text-center"
                style={{ backgroundColor: "black", color: "white" }}
              >
                <h4>นัดหมาย</h4>
              </Card.Header>
              <Card.Body>
                <Container fluid>
                  <Form onSubmit={handleRegister}>
                    <Row className="row-cols-1">
                      <Col>
                        <FormGroup>
                          <Form.Label>
                            <strong>วันที่นัด</strong>
                          </Form.Label>
                          <br />
                          <DatePicker
                            selected={appointmentDate}
                            onChange={handleDateChange}
                            className="date-picker"
                            dateFormat="dd/MM/yyyy"
                            minDate={tomorrow}
                            placeholderText="Select a date"
                            isClearable
                            showYearDropdown
                            scrollableYearDropdown
                          />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <Form.Label>
                            <strong>เวลาที่นัด</strong>
                          </Form.Label>
                          <br />
                          {timeSlots.map((slot) => (
                            <Button
                              className="ml-2 mb-2"
                              key={slot.value}
                              variant={
                                selectedAppointmentTime === slot.value
                                  ? "dark"
                                  : "outline-dark"
                              }
                              onClick={() =>
                                handleToggleAppointmentTime(slot.value)
                              }
                            >
                              {slot.label}
                            </Button>
                          ))}
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
                    </Row>
                    <Row className="justify-content-center mt-3">
                      <Button type="submit" variant="success">
                        ยืนยัน
                      </Button>{" "}
                    </Row>
                  </Form>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Registration;
