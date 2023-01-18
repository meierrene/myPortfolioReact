import React from 'react';

const Omnifood = () => {
  return (
    <div className="postcard">
      <div className="gallery-img">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://renemeier-gallery.netlify.app/projects/omnifood/"
        >
          <img
            src={require('./img/omnifood.png')}
            alt="Omnifood full responsive and optimized food website"
          />
        </a>
      </div>
      <span className="gallery-title">Omnifood food website</span>
    </div>
  );
};

export default Omnifood;
