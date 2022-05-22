import React from 'react';

const WhereAmI = () => {
  return (
    <div className="postcard">
      <div className="gallery-img">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://renemeier-gallery.netlify.app/projects/where-am-i/"
        >
          <img
            src={require('./img/where-am-i.png')}
            alt="Where Am I async API JS"
          />
        </a>
      </div>
      <span className="gallery-title">Where Am I?</span>
    </div>
  );
};

export default WhereAmI;
