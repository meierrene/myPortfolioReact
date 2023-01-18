import React from 'react';

const Mapty = () => {
  return (
    <div className="postcard">
      <div className="gallery-img">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://renemeier-gallery.netlify.app/projects/mapty/"
        >
          <img src={require('./img/mapty.png')} alt="Basic JS Mapty API map" />
        </a>
      </div>
      <span className="gallery-title">Mapty</span>
    </div>
  );
};

export default Mapty;
