
import React from 'react';
import './styles.css';

function Clicker({ onClick }) {
  return (
    <button onClick={onClick} style={{ fontSize: '20px', padding: '10px', }}>
        
        Dare to Click!
    </button>
  );
}

export default Clicker;
