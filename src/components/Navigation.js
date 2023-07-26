import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePlus,
  faHandPointer,
  faTruckMedical,
  faGear,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../images/unnamed.png";
import { Image, Col, Row } from "react-bootstrap";

const Navigation = (props) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark d-none d-lg-block sticky-top"
        role="navigation"
      >
        <div className="container-fluid">
          <Image src={logo} rounded style={{ with: "70px", height: "70px" }} />
          <Row>
            <Col lg={12} style={{ color: "white" }}>
              <h5>
                ระบบลงทะเบียนผู้ป่วยผ่านเครือข่ายอินเตอร์เน็ต
                โรงพยาบาลเกษมราษฎร์ ศรีบุรินทร์
              </h5>
            </Col>
            <Col lg={12} style={{ color: "white" }}>
              <h5>Patient Registration System Kasemrad Hospital Sriburin</h5>
            </Col>
          </Row>
          <Nav className="ml-auto">
            <NavItem>
              <NavLink to="/Agreement" className="nav-link">
                ข้อกำหนด
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/register" className="nav-link">
                สมัครสมาชิก
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/login" className="nav-link">
                เข้าสู่ระบบ
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </nav>
      <Nav className="navbar fixed-bottom navbar-light bg-light d-block d-lg-none bottom-tab-nav">
        <div className="d-flex flex-row justify-content-around w-100">
          <NavLink exact to="/medical" className="nav-link" activeClassName="active">
            <div className="nav-item">
              <FontAwesomeIcon icon={faSquarePlus} className="nav-icon" />
              <span className="nav-text">ตรวจรักษา</span>
            </div>
          </NavLink>
          <NavLink to="/DeliveryMedicine" className="nav-link" activeClassName="active">
            <div className="nav-item">
              <FontAwesomeIcon icon={faTruckMedical} className="nav-icon" />
              <span className="nav-text">จัดส่งยา</span>
            </div>
          </NavLink>
          <NavLink to="/Setting" className="nav-link" activeClassName="active">
            <div className="nav-item">
              <FontAwesomeIcon icon={faGear} className="nav-icon" />
              <span className="nav-text">จัดการข้อมูล</span>
            </div>
          </NavLink>
          <NavLink to="/AppNotify" className="nav-link" activeClassName="active">
            <div className="nav-item">
              <FontAwesomeIcon icon={faBell} className="nav-icon" />
              <span className="nav-text">แจ้งเตือน</span>
            </div>
          </NavLink>
        </div>
      </Nav>
    </>
  );
};

export default Navigation;
