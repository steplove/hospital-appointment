import React, { useEffect, useState } from "react";
import useTokenCheck from "../hooks/useTokenCheck";
import { Card } from "react-bootstrap";
import { BASE_URL } from "../constants/constants";

function RegisterRecord() {
  const [firstName, lastname, hospitalNumber] = useTokenCheck();
  const [notify, setNotify] = useState([]);

  useEffect(() => {
    fetch(
      BASE_URL + `/readAppointment?hospitalNumber=${hospitalNumber}`
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
      {notify && notify.length > 0 ? (
        <div className="d-flex flex-wrap justify-content-between">
          {notify.map((appointment) => (
            <Card
              key={appointment.id}
              style={{
                margin: "10px",
                width: "100%", // ขยายขนาดการ์ดให้เต็มรูปแบบ
                borderBottom: "2px solid #ccc", // เพิ่มเส้นใต้การ์ด
              }}
            >
              <Card.Title>
                <span style={{ fontSize: "0.8rem", marginLeft: "10px" }}>
                  {appointment.hospitalNumber}
                </span>
              </Card.Title>
              <Card.Body>
                <span>{appointment.firstName}</span>{" "}
                <span>{appointment.lastName}</span>
                <p>
                  {new Date(appointment.date_appointment).toLocaleDateString()}
                </p>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <div>
          <Card>
            <Card.Body>
              <h1>ไม่มีประวัตินัดหมาย</h1>
            </Card.Body>
          </Card>
        </div>
      )}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default RegisterRecord;
