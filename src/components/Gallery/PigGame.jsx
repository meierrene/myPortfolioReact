import React from 'react';

const SimonGame = () => {
  return (
    <div className="postcard">
      <div className="gallery-img">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://renemeier-gallery.netlify.app/projects/simongame/"
        >
          <img src={require('./img/simongame.png')} alt="Basic JS Simon Game" />
        </a>
      </div>
      <span className="gallery-title">Simon Game</span>
    </div>
  );
};

export default SimonGame;
