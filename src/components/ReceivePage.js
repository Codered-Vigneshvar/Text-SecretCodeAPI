import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ReceivePage.css';

function ReceivePage() {
  const [noteKey, setNoteKey] = useState('');
  const [noteText, setNoteText] = useState('');
  const [isEditable, setIsEditable] = useState(false);
  const navigate = useNavigate();

  const handleRetrieve = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/get-note', {
        note_key: noteKey,
      });
      setNoteText(response.data.note_text);
      setIsEditable(true);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/update-note', {
        note_text: noteText,
        note_key: noteKey,
      });
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="page-container">
      <button className="back-button" onClick={() => navigate('/')}>Home</button>
      <h2>Receive Page</h2>
      <form onSubmit={handleRetrieve} className="form-container">
        <input
          type="text"
          placeholder="Enter Key"
          value={noteKey}
          onChange={(e) => setNoteKey(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="confirm-button">Retrieve</button>
      </form>
      {noteText && (
        <div className="received-data-container">
          <h3>Received Data</h3>
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            className="text-area"
            readOnly={!isEditable}
          />
          {isEditable && (
            <button onClick={handleSave} className="save-button">Save</button>
          )}
        </div>
      )}
    </div>
  );
}

export default ReceivePage;




