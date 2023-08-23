import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import Foot from "../components/Foot";
import { BASE_URL } from "../constants/constants";

function Register() {
  const Swal = require("sweetalert2");
  useEffect(() => {
    fetchReadProvinceData();
  }, []);
  //================================ select Province ===================================//
  const [readProvince, setReadProvince] = useState([]);
  const fetchReadProvinceData = () => {
    fetch(BASE_URL + "/api/readProvince")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setReadProvince(data);
      });
  };

  const [amphures, setAmphures] = useState([]);
  const fetchAmphures = (provinceName) => {
    console.log(provinceName);

    fetch(BASE_URL + `/api/readAmphures?provinceName=${provinceName}`)
      .then((response) => response.json())
      .then((data) => {
        setAmphures(data);
      })
      .catch((error) => {
        console.error("Error fetching amphures:", error);
      });
  };

  const [subDistricts, setSubDistricts] = useState([]);
  const fetchSubDistricts = (amphureId) => {
    console.log(amphureId);

    fetch(BASE_URL + `/api/readDistricts?amphureId=${amphureId}`)
      .then((response) => response.json())
      .then((data) => {
        setSubDistricts(data);
      })
      .catch((error) => {
        console.error("Error fetching sub-districts:", error);
      });
  };
  const [postalCodes, setPostalCodes] = useState([]);

  const fetchPostalCodes = (amphureId) => {
    fetch(BASE_URL + `/api/readPostalCodes?amphureId=${amphureId}`)
      .then((response) => response.json())
      .then((data) => {
        setPostalCodes(data);
      })
      .catch((error) => {
        console.error("Error fetching postal codes:", error);
      });
  };
  
  const [formData, setFormData] = useState({
    identificationType: "",
    identificationNumber: "",
    hospitalNumber: "",
    gender: "",
    prefix: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    address: "",
    moo: "",
    subDistrict: "",
    district: "",
    province: "",
    postalCode: "",
    mobile: "",
    homePhone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData.customApi);
    if (name === "province") {
      fetchAmphures(value);
      fetchSubDistricts(value);
      fetchPostalCodes(value);
    } else if (name === "district") {
      fetchSubDistricts(value);
      fetchPostalCodes(value);
    }
  };
  // ตรวจสอบค่าเริ่มต้นในกรณีที่ผู้ใช้ไม่ได้เลือกอะไรเลย
  useEffect(() => {
    if (!formData.identificationType) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        identificationType: "เลขประจำตัวประชาชน", // หรือค่าเริ่มต้นที่คุณต้องการให้เป็นค่าเริ่มต้น
      }));
    }
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();

    // Perform custom validation if needed before submitting the form
    // Check if all required fields are filled before sending data to the server
    if (
      formData.identificationType &&
      formData.identificationNumber &&
      formData.gender &&
      formData.firstName &&
      formData.lastName &&
      formData.birthDate &&
      formData.address &&
      formData.moo &&
      formData.subDistrict &&
      formData.district &&
      formData.province &&
      formData.postalCode &&
      formData.mobile &&
      formData.password &&
      formData.confirmPassword &&
      formData.password === formData.confirmPassword
    ) {
      // Form is valid, perform form submission logic here
      console.log("Form data:", formData);

      // ส่งข้อมูลไปยัง Node.js backend ที่อยู่ใน endpoint /registration โดยใช้ fetch API
      fetch(BASE_URL + "/api/insertCustomer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Response from server:", data);
          Swal.fire("Good job!", "You clicked the button!", "success");
          setFormData({
            identificationType: "",
            identificationNumber: "",
            hospitalNumber: "",
            gender: "",
            prefix: "",
            firstName: "",
            lastName: "",
            birthDate: "",
            address: "",
            moo: "",
            subDistrict: "",
            district: "",
            province: "",
            postalCode: "",
            mobile: "",
            homePhone: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        })
        .catch((error) => {
          console.error("Error sending data to the server:", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light text-center">
        <div class="container">
          <h1 class="mx-auto">สมัครสมาชิก</h1>
        </div>
      </nav>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={6} lg={12}>
            <Card>
              <Card.Header
                className="text-center"
                style={{ backgroundColor: "black", color: "white" }}
              >
                <h4>สมัครสมาชิก</h4>
              </Card.Header>

              <Card.Body>
                <p className="text-danger">
                  * กรุณาตรวจสอบข้อมูลและกรอกข้อมูลให้ครบทุกช่อง
                  (โดยเฉพาะช่องที่มี *)
                </p>
                <Form onSubmit={handleRegister}>
                  <Form.Group as={Row}>
                    <Col sm={12} md={12} lg={12}>
                      <Form.Label>
                        เลขประจำตัวประชาชน / พาสปอร์ต{" "}
                        <span className="text-danger">*</span>{" "}
                      </Form.Label>
                      <Row>
                        <Col sm={6} md={3} lg={3}>
                          <Form.Check
                            type="radio"
                            name="identificationType"
                            id="identificationType"
                            label="เลขประจำตัวประชาชน"
                            value="เลขประจำตัวประชาชน"
                            onChange={handleInputChange}
                            checked={
                              formData.identificationType ===
                              "เลขประจำตัวประชาชน"
                            }
                          />
                        </Col>
                        <Col sm={6} md={3} lg={3}>
                          <Form.Check
                            type="radio"
                            name="identificationType"
                            id="identificationType2"
                            label="พาสปอร์ต"
                            value="พาสปอร์ต"
                            onChange={handleInputChange}
                            checked={formData.identificationType === "พาสปอร์ต"}
                          />
                        </Col>
                      </Row>
                      <Form.Control
                        type="text"
                        placeholder="ใส่หมายเลขที่นี่"
                        name="identificationNumber"
                        value={formData.identificationNumber}
                        onChange={handleInputChange}
                        required // เพิ่ม required attribute เพื่อตรวจสอบข้อมูล
                      />
                    </Col>
                  </Form.Group>
                  <Col sm={12} md={12} lg={12}>
                    <Form.Group controlId="hospitalNumberInput">
                      <Form.Label>เลขที่โรงพยาบาล (HN)</Form.Label>
                      <Form.Control
                        type="text"
                        name="hospitalNumber"
                        value={formData.hospitalNumber}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Row>
                    <Col sm={6} md={6} lg={6}>
                      <Form.Group>
                        <Form.Label>คำนำหน้า</Form.Label>
                        <Form.Control
                          as="select"
                          name="prefix"
                          value={formData.prefix}
                          onChange={handleInputChange}
                        >
                          <option value="">เลือกคำนำหน้า</option>
                          <option value="นาย">นาย</option>
                          <option value="นาง">นาง</option>
                          <option value="นางสาว">นางสาว</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Form.Group>
                      <Form.Label>เพศ</Form.Label>
                      <Row>
                        <Col sm={3}>
                          <Form.Check
                            type="radio"
                            name="gender"
                            id="genderMale"
                            label="ชาย"
                            value="ชาย"
                            checked={formData.gender === "ชาย"}
                            onChange={handleInputChange}
                          />
                        </Col>
                        <Col sm={3}>
                          <Form.Check
                            type="radio"
                            name="gender"
                            id="genderFemale"
                            label="หญิง"
                            value="หญิง"
                            checked={formData.gender === "หญิง"}
                            onChange={handleInputChange}
                          />
                        </Col>
                      </Row>
                    </Form.Group>
                  </Row>

                  <Form.Group as={Row}>
                    <Col sm={6}>
                      <Form.Label>ชื่อ</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col sm={6}>
                      <Form.Label>นามสกุล</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    <Col sm={4} md={4} lg={4}>
                      <Form.Label>
                        วัน/เดือน/ปีเกิด <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="date"
                        id="birthDate"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Col sm={4} md={4} lg={6}>
                      <Form.Label>
                        บ้านเลขที่ <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required // เพิ่ม required attribute เพื่อตรวจสอบข้อมูล
                      />
                    </Col>
                    <Col sm={4} md={4} lg={6}>
                      <Form.Label>หมู่</Form.Label>
                      <Form.Control
                        type="text"
                        name="moo"
                        value={formData.moo}
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Form.Group>
                  
                  <Form.Group as={Row}>
                    <Col sm={6} md={6} lg={6}>
                      <Form.Label>
                        จังหวัด <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        as="select"
                        value={formData.province}
                        name="province"
                        onChange={handleInputChange}
                      >
                        <option value="">เลือกจังหวัด...</option>
                        {readProvince &&
                          readProvince.length > 0 &&
                          readProvince.map((readProvinces) => (
                            <option
                              key={readProvinces.id}
                              value={readProvinces.id}
                            >
                              {readProvinces.name_th}
                            </option>
                          ))}
                      </Form.Control>
                    </Col>
                    <Col sm={4} md={4} lg={6}>
                      <Form.Label>
                        อำเภอ <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        as="select"
                        value={formData.district}
                        name="district"
                        onChange={handleInputChange}
                      >
                        <option value="">เลือกอำเภอ...</option>
                        {amphures &&
                          amphures.length > 0 &&
                          amphures.map((amphure) => (
                            <option key={amphure.id} value={amphure.id}>
                              {amphure.name_th}
                            </option>
                          ))}
                      </Form.Control>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Col sm={6} md={6} lg={6}>
                      <Form.Label>
                        ตำบล <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        as="select"
                        value={formData.subDistrict}
                        name="subDistrict"
                        onChange={handleInputChange}
                      >
                        <option value="">เลือกตำบล...</option>
                        {subDistricts &&
                          subDistricts.length > 0 &&
                          subDistricts.map((subDistrict) => (
                            <option key={subDistrict.id} value={subDistrict.id}>
                              {subDistrict.name_th}
                            </option>
                          ))}
                      </Form.Control>
                    </Col>

                    <Col sm={6} md={6} lg={6}>
                      <Form.Label>
                        รหัสไปรษณีย์ <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        as="select"
                        value={formData.postalCode}
                        name="postalCode"
                        onChange={handleInputChange}
                      >
                        <option value="">เลือกรหัสไปรษณีย์...</option>
                        {postalCodes &&
                          postalCodes.length > 0 &&
                          postalCodes.map((postalCode) => (
                            <option key={postalCode.id} value={postalCode.zip_code}>
                              {postalCode.zip_code}
                            </option>
                          ))}
                      </Form.Control>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    <Col sm={4} md={4} lg={6}>
                      <Form.Label>
                        มือถือ <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required // เพิ่ม required attribute เพื่อตรวจสอบข้อมูล
                      />
                    </Col>
                    <Col sm={4} md={4} lg={6}>
                      <Form.Label>โทรศัพท์บ้าน</Form.Label>
                      <Form.Control
                        type="text"
                        name="homePhone"
                        value={formData.homePhone}
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Col sm={12} md={12} lg={12}>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Col sm={4} md={4} lg={6}>
                      <Form.Label>
                        รหัสผ่าน <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col sm={4} md={4} lg={6}>
                      <Form.Label>ยืนยันรหัสผ่าน</Form.Label>
                      <Form.Control
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Form.Group>

                  <br />
                  <Button variant="primary" type="submit">
                    สมัครสมาชิก
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Foot />
    </>
  );
}

export default Register;
