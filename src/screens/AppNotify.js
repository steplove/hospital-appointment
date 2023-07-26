import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import useTokenCheck from "../hooks/useTokenCheck";

function AppNotify() {
  const [username, lastname, hospitalNumber] = useTokenCheck();
  const [notify, setNotify] = useState([]);
  console.log(hospitalNumber, "asfasf");
  useEffect(() => {
    fetch(
      `http://localhost:3000/readAppointment?hospitalNumber=${hospitalNumber}`
    )
      .then((response) => response.json())
      .then((data) => {
        setNotify(data);
        console.log(data, "sgsd");
      })
      .catch((error) => console.error(error));
  }, [hospitalNumber]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
        <div className="container">
          <h1 className="mx-auto">แจ้งเตือน</h1>
        </div>
      </nav>
      <br />
      {notify && notify.length > 0 ? (
        notify.map((appointment) => (
          <Card
            key={appointment.id}
            style={{ margin: "auto", marginTop: "10px" }}
          >
            <Card.Text>
              <Row>
                <Col xs={9}>
                  {/* แสดงส่วนของวันที่ (วันเดือนปี) และเวลา (ชั่วโมงและนาที) */}
                  <span style={{ fontSize: "12px" }}>
                    {new Date(appointment.created_at).toLocaleString("th-TH", {
                      dateStyle: "short",
                      timeStyle: "short",
                    })}
                  </span>
                </Col>
                <Col xs={3}>
                  <span className={`status-${appointment.status}`}>
                    {appointment.status}
                  </span>
                </Col>
              </Row>
              <Card.Title
                style={{ borderBottom: "2px solid #ccc" }}
              ></Card.Title>
            </Card.Text>
            <Card.Body style={{ fontSize: "12px" }}>
              <span>HN : </span> {appointment.hospitalNumber}{" "}
              <span>นัดวันที่ : </span>
              {new Date(appointment.date_appointment).toLocaleString("th-TH", {
                dateStyle: "short",
              })}
              {""}
              <span> สถานที่ :</span> {appointment.clinic}
            </Card.Body>
          </Card>
        ))
      ) : (
        <div>ไม่มีประวัตินัดหมาย</div>
      )}
    </>
  );
}

export default AppNotify;
