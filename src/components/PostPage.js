import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './PostPage.css';

function PostPage() {
  const [noteText, setNoteText] = useState('');
  const [noteKey, setNoteKey] = useState('');
  const navigate = useNavigate();

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/save-note', {
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
      <h2>Post Page</h2>
      <form onSubmit={handleSave} className="form-container">
        <textarea
          placeholder="Enter your data"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          className="text-area"
        />
        <input
          type="text"
          placeholder="Create Key"
          value={noteKey}
          onChange={(e) => setNoteKey(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="confirm-button">Confirm</button>
      </form>
    </div>
  );
}

export default PostPage;



