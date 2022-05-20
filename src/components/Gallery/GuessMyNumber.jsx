import React from 'react';

const GuessMyNumber = () => {
  return (
    <div className="postcard">
      <div className="gallery-img">
        <img
          src={require('../../img/test.jpg')}
          alt="Guess My Number JS Game"
        />
      </div>
      <span className="gallery-title">Building</span>
    </div>
  );
};

export default GuessMyNumber;
