import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventList from './components/EventList';
import AddEventForm from './components/AddEventForm';
import EventDetail from './components/EventDetail';

const App = () => {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);

  const addEvent = (event) => {
    if (editingEvent !== null) {
      const updatedEvents = events.map((e, index) =>
        index === editingEvent.index ? event : e
      );
      setEvents(updatedEvents);
      setEditingEvent(null);
    } else {
      setEvents([...events, event]);
    }
  };

  const deleteEvent = (index) => {
    const newEvents = events.filter((_, i) => i !== index);
    setEvents(newEvents);
  };

  const editEvent = (index) => {
    setEditingEvent({ ...events[index], index });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<EventList events={events} deleteEvent={deleteEvent} editEvent={editEvent} />}
        />
        <Route
          path="/add-event"
          element={<AddEventForm addEvent={addEvent} editingEvent={editingEvent} />}
        />
        <Route path="/event/:eventId" element={<EventDetail events={events} />} />
      </Routes>
    </Router>
  );
};

export default App;
