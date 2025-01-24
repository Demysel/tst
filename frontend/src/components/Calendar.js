import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Calendar = ({ token }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get('https://valeal.netlify.app/api/events', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEvents(response.data);
    };
    fetchEvents();
  }, [token]);

  return (
    <div>
      <h2>Calendar</h2>
      {events.map((event) => (
        <div key={event._id}>
          <h3>{event.title}</h3>
          <p>{event.date}</p>
          <p>{event.type}</p>
        </div>
      ))}
    </div>
  );
};

export default Calendar;

