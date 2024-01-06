import Event from "./Event";
import { useState, useEffect } from "react";
import AddEvent from "./AddEvent";
import "./Events.css";
import Noevents from "./Noevents";
import AddIcon from "@mui/icons-material/Add";

function extractDateFromString(dateString) {
  const timestamp = Date.parse(dateString);

  if (!isNaN(timestamp)) {
    const date = new Date(timestamp);
    return date;
  }

  return null;
}

function getDate(date) {
  date = extractDateFromString(date);
  if (date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    //console.log(`${year}-${month}-${day}`)
    return `${year}-${month}-${day}`;
  }
}

function Events({ events, id,admin }) {
  



  const currDate = getDate(new Date());
  const [allEvents, setallEvents] = useState(events);
  const [upcomingEvents, setUpcominEvents] = useState(true);
  let selectEvent = [];
  useEffect(() => {
    setallEvents(events);
  }, [events]);
  console.log(allEvents)
  if (upcomingEvents) {
    selectEvent = allEvents.filter(
      (event) => getDate(event.eventDate) >= currDate
    );
  } else {
    selectEvent = allEvents.filter(
      (event) => getDate(event.eventDate) < currDate
    );
  }
  console.log(selectEvent);
  const isAdmin = admin === "yes" ? true : false;
  const [addEvent, setAddEvent] = useState(false);
  function changeEvent(e) {
    if (e.target.name === "upcoming") {
      setUpcominEvents(true);
    } else {
      setUpcominEvents(false);
    }
  }

  return (
    <div>
      <button
        className="event-button"
        name="upcoming"
        onClick={changeEvent}
        style={{ backgroundColor: upcomingEvents ? "black" : "grey" }}
      >
        Upcoming Events
      </button>
      <button
        className="event-button"
        name="past"
        onClick={changeEvent}
        style={{ backgroundColor: !upcomingEvents ? "black" : "grey" }}
      >
        Past Events
      </button>
      <br />
      {isAdmin && (
        <button
          className="event-button"
          onClick={() => {
            setAddEvent(true);
          }}
        >
          {" "}
          <AddIcon /> Add Event
        </button>
      )}
      {addEvent && (
        <AddEvent
          setAddEvent={setAddEvent}
          setallEvents={setallEvents}
          allEvents={allEvents}
        />
      )}
      {selectEvent.length != 0 ? (
        <div className="allevents">
          {selectEvent.map((event) => (
            <Event key={event._id} event={event} isCompleted={upcomingEvents}  clubId= {id} admin={admin}/>
          ))}
        </div>
      ) : (
        <Noevents />
      )}
    </div>
  );
}   

export default Events;
