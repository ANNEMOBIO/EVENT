import React from 'react';
import { Link } from 'react-router-dom';
import './lis.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const EventList = ({ events, deleteEvent, editEvent }) => {
  return (
    <div className='re'>
      <h1>Evenements</h1>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <Link to={`/event/${index}`}>{event.title}</Link>
            <i className="fas fa-trash-alt delete-icon" onClick={() => deleteEvent(index)}></i>
          </li>
        ))}
      </ul>
      <div className='ee'><Link to="/add-event">AJOUTER</Link></div>
    </div>
  );
};

export default EventList;
