import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Card } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { BASE_URL } from "../constants/constants";
import useTokenCheck from "../hooks/useTokenCheck";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function Appointment() {
  const [allEvents, setAllEvents] = useState([]);
  const [username, lastname, hospitalNumber] = useTokenCheck();

  useEffect(() => {
    fetch(BASE_URL + `/api/readAppointment?hospitalNumber=${hospitalNumber}`)
      .then((response) => response.json())
      .then((data) => {
        const formattedEvents = data.map((event) => {
          const appointmentDate = new Date(event.date_appointment);
          const appointmentTime = new Date(`1970-01-01T${event.time_appointment}`);
          const start = new Date(appointmentDate);
          start.setHours(appointmentTime.getHours());
          start.setMinutes(appointmentTime.getMinutes());
          const end = new Date(start);
          end.setMinutes(start.getMinutes() + 30); // หรือเวลาที่เหมาะสม
          
          return {
            title: event.description,
            start,
            end,
          };
        });
        setAllEvents([...allEvents, ...formattedEvents]);
      })
      .catch((error) => console.error(error));
  }, [hospitalNumber]);

  return (
    <div className="App">
      <Card className="mt-5">
        <h1 className="mt-5 text-center">ปฏิทิน การนัดหมาย</h1>
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 700 }}
          toolbar={false}
          view="agenda"
        />
      </Card>
    </div>
  );
}

export default Appointment;
