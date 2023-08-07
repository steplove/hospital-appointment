import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./Foot.css"; // Import a CSS file to style the footer
import logo from "../images/unnamed.png";
import { Image } from "react-bootstrap";

function Foot() {
  return (
    <div className="footer-container">
      <Navbar className="bg-body-tertiary">
        <Container>
          <Row className="mt-5">
          <Col xs lg={3}>
          <Image src={logo} rounded style={{ with: "70px", height: "70px" }} />

            </Col>
            <Col xs lg={3}>
              <h5>About</h5>
              <li>About us</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li><a href="Login">Login</a></li>
              <li>Register</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Contact</li>
            </Col>
            <Col xs lg={3}>
              <h5>USEFUL LINKS</h5>
              <li>Doctors</li>
              <li>Clinics</li>
              <li>Specialization</li>
              <li>Join as a Doctor</li>
            </Col>
            <Col xs lg={3}>
              <h5>CONTACT WITH US</h5>
              <li>Clinics</li>
              <li>Specialization</li>
              <li>Join as a Doctor</li>
              <h5>FOLLOW US</h5>
            </Col>
            <span className="foot-line w-100 mt-5"></span>
            <Col xs lg="auto">
              <a href="/">Terms and conditions</a>
            </Col>
            |
            <Col xs lg="5">
              <a href="/">Privacy</a>
            </Col>
            <Col xs lg="auto">
              <span>
                © สงวนลิขสิทธิ์ พ.ศ. 2566 บริษัท บางกอก เชน ฮอสปิทอล จำกัด
                (มหาชน)
              </span>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
}

export default Foot;
