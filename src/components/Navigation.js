// Navigation.js

import React, { useState, useEffect } from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePlus,
  faGear,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { Col } from "react-bootstrap";
const Navigation = (props) => {
  const initialLoggedInState = localStorage.getItem("token") ? true : false;
  const [isLoggedIn, setIsLoggedIn] = useState(initialLoggedInState);
  const handleLogout = () => {
    Swal.fire({
      title: "ยืนยันการออกจากระบบ",
      text: "คุณต้องการออกจากระบบหรือไม่?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsLoggedIn(false);
        Swal.fire({
          icon: "success",
          title: "ออกจากระบบสำเร็จ",
          text: "คุณได้ออกจากระบบเรียบร้อยแล้ว",
        }).then(() => {
          const token = localStorage.getItem("token");
          if (token) {
            localStorage.removeItem("token");
            window.location = "/Login";
          } else {
            // Handle case where token is not found
            console.error("Token not found");
          }
        });
      }
    });
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark d-none d-lg-block sticky-top"
        role="navigation"
      >
        <Nav className="ml-auto">
          {!isLoggedIn ? (
            <>
              <NavItem>
                <NavLink to="/Agreement" className="nav-link">
                  ข้อกำหนด
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Register" className="nav-link">
                  สมัครสมาชิก
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Login" className="nav-link">
                  เข้าสู่ระบบ
                </NavLink>
              </NavItem>
            </>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginLeft: "90%",
                }}
              >
                <NavItem>
                  <NavLink className="nav-link" onClick={handleLogout}>
                    <div>ออกระบบ</div>
                  </NavLink>
                </NavItem>
              </div>
            </>
          )}
        </Nav>
      </nav>
      <Nav className="navbar fixed-bottom navbar-light bg-light d-block d-lg-none bottom-tab-nav">
        <div className="d-flex flex-row justify-content-around w-100">
          <NavLink
            exact
            to="/Medical"
            className="nav-link"
            activeClassName="active"
          >
            <div className="nav-item">
              <FontAwesomeIcon icon={faSquarePlus} className="nav-icon" />
              <span className="nav-text">ตรวจรักษา</span>
            </div>
          </NavLink>
          {/* <NavLink
            to="/DeliveryMedicine"
            className="nav-link"
            activeClassName="active"
          >
            <div className="nav-item">
              <FontAwesomeIcon icon={faTruckMedical} className="nav-icon" />
              <span className="nav-text">จัดส่งยา</span>
            </div>
          </NavLink> */}
          <NavLink to="/Setting" className="nav-link" activeClassName="active">
            <div className="nav-item">
              <FontAwesomeIcon icon={faGear} className="nav-icon" />
              <span className="nav-text">จัดการข้อมูล</span>
            </div>
          </NavLink>
          <NavLink
            to="/AppNotify"
            className="nav-link"
            activeClassName="active"
          >
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
