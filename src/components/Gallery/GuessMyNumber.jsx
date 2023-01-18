import React from 'react';

const GuessMyNumber = () => {
  return (
    <div className="postcard">
      <div className="gallery-img">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://renemeier-gallery.netlify.app/projects/guess-my-number/"
        >
          <img
            src={require('./img/guess-my-number.png')}
            alt="Guess My Number JS Game"
          />
        </a>
      </div>
      <span className="gallery-title">Guess my number Game</span>
    </div>
  );
};

export default GuessMyNumber;
