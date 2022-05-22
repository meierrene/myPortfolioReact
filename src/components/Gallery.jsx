import React from 'react';
import BankistApp from './Gallery/BankistApp';
import BankistHomepage from './Gallery/BankistHomepage';
import DiceeGame from './Gallery/DiceeGame';
import DrumKit from './Gallery/DrumKit';
import GuessMyNumber from './Gallery/GuessMyNumber';
import Mapty from './Gallery/Mapty';
import Omnifood from './Gallery/Omnifood';
import SimonGame from './Gallery/PigGame';
import PigGame from './Gallery/PigGame';
import WhereAmI from './Gallery/WhereAmI';

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="h2-title">Gallery</h2>
      <div className="icons-container gallery">
        <GuessMyNumber />
        <BankistApp />
        <BankistHomepage />
        <DiceeGame />
        <DrumKit />
        <Mapty />
        <Omnifood />
        <PigGame />
        <SimonGame />
        <WhereAmI />
      </div>
    </div>
  );
};

export default Gallery;
