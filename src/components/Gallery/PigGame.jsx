import React from 'react';

const PigGame = () => {
  return (
    <div className="postcard">
      <div className="gallery-img">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://renemeier-gallery.netlify.app/projects/pig-game/"
        >
          <img
            src={require('./img/pig-game.png')}
            alt="Basic JS Pig 2 players Game"
          />
        </a>
      </div>
      <span className="gallery-title">Pig Game</span>
    </div>
  );
};

export default PigGame;
