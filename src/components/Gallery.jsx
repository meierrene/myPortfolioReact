import React from 'react';
import BankistApp from './Gallery/BankistApp';
import GuessMyNumber from './Gallery/GuessMyNumber';

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="h2-title">Gallery</h2>
      <div className="icons-container gallery">
        <GuessMyNumber />
        <BankistApp />
      </div>
    </div>
  );
};

export default Gallery;
