import React from 'react';

const Natours = () => {
  return (
    <div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://natours-renemeier.herokuapp.com/"
      >
        <img
          src={require('./img/natours.png')}
          className="d-block w-100"
          alt="Portfolio gallery Natours"
        />
      </a>
      <p className="myproject-description">
        My newest RESTful API Application, The Natours! Create you account and
        enjoy it!
      </p>
    </div>
  );
};

export default Natours;
