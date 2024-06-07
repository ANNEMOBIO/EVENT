import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './eve.css';



const EventDetail = ({ events }) => {
  const { eventId } = useParams();
  const event = events[eventId];

  if (!event) {
    return <div>AUCUN EVENEMENT</div>;
  }

  return (
    <div className='de'>
      <h1>{event.title}</h1>
      <p>{event.date}</p>
      <p>{event.description}</p>
      <Link to="/">RETOUR</Link>
    </div>
  );
};

export default EventDetail;
