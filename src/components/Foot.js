import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Foot.css"; // Import a CSS file to style the footer

function Foot() {
  return (
    <div className="footer-container">
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Brand text</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Foot;
