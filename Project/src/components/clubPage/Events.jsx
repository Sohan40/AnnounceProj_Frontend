import Event from "./Event";
import { useState, useEffect } from "react";
import AddEvent from "./AddEvent";
import "./Events.css"
import Noevents from "./Noevents";



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
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }
        return `${year}-${month}-${day}`;
    }
}

function Events({ events ,id}) {
    const currDate = getDate(new Date());
    const [allEvents,setallEvents]=useState(events);
    console.log(events);
    console.log(allEvents);
    const [upcomingEvents, setUpcominEvents] = useState(true);
    let selectEvent=[];
    if(upcomingEvents)
    {
        selectEvent=allEvents.filter((event) => getDate(event.date) >= currDate);
    }
    else
    {
        selectEvent=allEvents.filter((event) => getDate(event.date) < currDate);
    }
    const isAdmin=(id==='NITWBUZZ1')?true:false;
    const [addEvent,setAddEvent]=useState(false);
    function changeEvent(e) {
        if (e.target.name === "upcoming") {
            setUpcominEvents(true);
          //  setSelectEvent(allEvents.filter((event) => event.date >= currDate));
        }
        else {
            setUpcominEvents(false);
          //  setSelectEvent(allEvents.filter((event) => event.date < currDate));
        }
    };



    return (
        <div>
            <h2>Events</h2>
            <button
                className="event-button"
                name="upcoming"
                onClick={changeEvent}
                style={{ backgroundColor: upcomingEvents ? "black" : "grey"}}
                >
                Upcoming Events</button>
            <button
                className="event-button"
                name="past"
                onClick={changeEvent}
                style={{ backgroundColor: !upcomingEvents ? "black" : "grey" }}>
                Past Events</button>
                <br/>
            {isAdmin && <button className="event-button" onClick={()=>{setAddEvent(true)}} style={{backgroundColor:"green"}}>Add Event</button>}
            {addEvent && <AddEvent setAddEvent={setAddEvent} setallEvents={setallEvents} allEvents={allEvents}/>}
            {selectEvent.length != 0 ?
                <div className="allevents">
                    {
                        selectEvent.map((event) =>
                            <Event key={event.id} event={event} isCompleted={upcomingEvents} />
                        )
                    }
                </div>
                : <Noevents/>}
        </div>
    );
}

export default Events;