import React from 'react';

const Forkify = () => {
  return (
    <div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://renemeier-forkify.netlify.app/"
      >
        <img
          src={require('./img/forkify.png')}
          className="d-block w-100"
          alt="Portfolio gallery Forkify"
        />
      </a>
      <p className="myproject-description">
        Forkify App - Find over 10.000 and create your own recipe.
      </p>
    </div>
  );
};

export default Forkify;
