import React, { useEffect, useState } from "react";
import useTokenCheck from "../hooks/useTokenCheck";
import { Card } from "react-bootstrap";

function RegisterRecord() {
  const [firstName, lastname, hospitalNumber] = useTokenCheck();
  const [notify, setNotify] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:3000/readAppointment?hospitalNumber=${hospitalNumber}`
    )
      .then((response) => response.json())
      .then((data) => {
        setNotify(data);
      })
      .catch((error) => console.error(error));
  }, [hospitalNumber]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
        <div className="container">
          <h1 className="mx-auto">ประวัติการจองตรวจ</h1>
        </div>
      </nav>
      <br />
      <div className="d-flex flex-wrap justify-content-between">
        {notify && notify.length > 0 ? (
          notify.map((appointment) => (
            <Card key={appointment.id} style={{ margin: "auto", marginTop: "10px" }}>
            <Card.Title >
              <span style={{ fontSize: "0.8rem", marginLeft: "10px" }}>
                {appointment.hospitalNumber}
              </span>
            </Card.Title>
            <Card.Title style={{ borderBottom: "2px solid #ccc" }}></Card.Title>
            <Card.Body>
              <span>{appointment.firstName}</span>{" "}
              <span>{appointment.lastName}</span>
              <p>
                {new Date(appointment.date_appointment).toLocaleDateString()}
              </p>
            </Card.Body>
          </Card>
          
          ))
        ) : (
          <div>ไม่มีประวัตินัดหมาย</div>
        )}
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
}

export default RegisterRecord;
