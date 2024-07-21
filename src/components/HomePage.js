import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1>Easy Notes!</h1>
      <div className="button-container">
        <button onClick={() => navigate('/post')} className="nav-button">POST</button>
        <button onClick={() => navigate('/receive')} className="nav-button">RECEIVE</button>
      </div>
    </div>
  );
}

export default HomePage;



