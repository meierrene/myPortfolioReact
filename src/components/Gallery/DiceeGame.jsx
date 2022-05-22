import React from 'react';

const DiceeGame = () => {
  return (
    <div className="postcard">
      <div className="gallery-img">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://renemeier-gallery.netlify.app/projects/dicee-game/dicee"
        >
          <img src={require('./img/dicee-game.png')} alt="Basic JS Dice game" />
        </a>
      </div>
      <span className="gallery-title">Dicee Game</span>
    </div>
  );
};

export default DiceeGame;
