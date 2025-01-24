import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Notes = ({ token }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await axios.get('http://localhost:5000/api/notes', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotes(response.data);
    };
    fetchNotes();
  }, [token]);

  return (
    <div>
      <h2>Notes</h2>
      {notes.map((note) => (
        <div key={note._id}>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Notes;

