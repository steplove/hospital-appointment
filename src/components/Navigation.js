// Navigation.js

import React, { useState, useEffect } from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePlus,
  faTruckMedical,
  faGear,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
const Navigation = (props) => {
  const initialLoggedInState = localStorage.getItem("token") ? true : false;
  const [isLoggedIn, setIsLoggedIn] = useState(initialLoggedInState);
  const handleLogout = () => {
    setIsLoggedIn(false);
    Swal.fire({
      icon: "success",
      title: "Logout Successful",
      text: "You have successfully logged out.",
    }).then(() => {
      localStorage.removeItem("token");
      window.location = "/Login";
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
              <NavItem>
                <NavLink to="/" className="nav-link" onClick={handleLogout}>
                  ออกจากระบบ {/* เปลี่ยนข้อความเมนูเป็น "ออกจากระบบ" */}
                </NavLink>
              </NavItem>
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
