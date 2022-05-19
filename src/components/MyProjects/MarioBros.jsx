import React from 'react';

const MarioBros = () => {
  return (
    <div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://renemeier-mariobros.netlify.app/"
      >
        <img
          src={require('../../img/mario-gallery.png')}
          className="d-block w-100"
          alt="Portfolio gallery Mario Bros"
        />
      </a>
      <p className="myproject-description">
        Unofficial Mario Bros using kaboom.js (Not compatible to mobile).
      </p>
    </div>
  );
};

export default MarioBros;
