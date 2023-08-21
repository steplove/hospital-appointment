import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import useTokenCheck from "../hooks/useTokenCheck";
import { BASE_URL } from "../constants/constants";
import useFetch from "../hooks/useFetch";
function AppNotify() {
  const [username, lastname, hospitalNumber] = useTokenCheck();
  const {
    data: notify,
    loading,
    error,
  } = useFetch(
    `${BASE_URL}/api/readAppointment?hospitalNumber=${hospitalNumber}`
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
              <Row style={{ borderBottom: "2px solid #ccc" }}>
                <Col xs={9}>
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
            </Card.Text>
            <Card.Body className="font-size-small text-start">
              <Row>
                <Col xs={6}>
                  <h6>HN : {appointment.hospitalNumber}</h6>
                </Col>
                <Col xs={6}>
                  <h6>
                    นัดวันที่ :{" "}
                    {new Date(appointment.date_appointment).toLocaleString(
                      "th-TH",
                      {
                        dateStyle: "short",
                      }
                    )}
                  </h6>
                </Col>
                <Col xs={6}>
                  <h6> สถานที่ : {appointment.clinic}</h6>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))
      ) : (
        <div>
          <Card>
            <Card.Body>
              <h1>ไม่มีการแจ้งเตือน</h1>
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

export default AppNotify;
