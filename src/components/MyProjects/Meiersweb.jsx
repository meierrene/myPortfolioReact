import React from 'react';

const Meiersweb = () => {
  return (
    <div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://renemeier-gallery.netlify.app/projects/meiers-web-guide/"
      >
        <img
          src={require('./img/meiersweb.png')}
          className="d-block w-100"
          alt="Portfolio gallery Meiersweb"
        />
      </a>
      <p className="myproject-description">
        My very first site - Meier's Web Guide, This site I implemented the
        automatic translations. Try it!
      </p>
    </div>
  );
};

export default Meiersweb;
