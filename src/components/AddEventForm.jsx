import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './add.css';

const AddEventForm = ({ addEvent, editingEvent }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (editingEvent) {
      setTitle(editingEvent.title);
      setDate(editingEvent.date);
      setDescription(editingEvent.description);
    } else {
      setTitle('');
      setDate('');
      setDescription('');
    }
  }, [editingEvent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({ title, date, description });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button type="submit">{editingEvent ? 'AJOUTER' : 'AJOUTER'}</button>
    </form>
  );
};

export default AddEventForm;
