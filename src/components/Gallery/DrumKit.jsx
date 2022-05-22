import React from 'react';

const DrumKit = () => {
  return (
    <div className="postcard">
      <div className="gallery-img">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://renemeier-gallery.netlify.app/projects/drumkit/"
        >
          <img
            src={require('./img/drumkit.png')}
            alt="Basic JS Drum Kit Play"
          />
        </a>
      </div>
      <span className="gallery-title">Drum Kit Play</span>
    </div>
  );
};

export default DrumKit;
