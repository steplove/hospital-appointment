import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Card } from "react-bootstrap";
import DatePicker from "react-datepicker";
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

const events = [
  {
    description: "Big Meeting",
    allDay: true,
    start: new Date(2021, 6, 0),
    end: new Date(2021, 6, 0),
  },
  {
    description: "Vacation",
    start: new Date(2021, 6, 7),
    end: new Date(2021, 6, 10),
  },
  {
    description: "Conference",
    start: new Date(2021, 6, 20),
    end: new Date(2021, 6, 23),
  },
];

function Test() {
  const [allEvents, setAllEvents] = useState(events);
  const [username, lastname, hospitalNumber] = useTokenCheck();
  useEffect(() => {
    // โหลดข้อมูลนัดหมายจาก API เมื่อ hospitalNumber เปลี่ยนหรือโหลดครั้งแรก
    fetch(BASE_URL + `/api/readAppointment?hospitalNumber=${hospitalNumber}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "af555555555555555555");
        const formattedEvents = data.map((event) => ({
          title: event.description,
          start: new Date(event.date_appointment).toLocaleDateString("en-US", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          }),
          end: new Date(event.date_appointment).toLocaleDateString("en-US", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          }),
          time: event.time_appointment,
        }));
        setAllEvents([...allEvents, ...formattedEvents]);
        
        console.log(formattedEvents, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
      })
      .catch((error) => console.error(error));
  }, [hospitalNumber]);

  return (
    <div className="App">
      <Card className="mt-5">
        <h1 className="mt-5">ปฏิทิน การนัดหมาย</h1>
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 700 }}
          toolbar={true}
          view="agenda"
        />
      </Card>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Test;
