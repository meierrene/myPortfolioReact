import React from 'react';

const Meiersweb = () => {
  return (
    <div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://renemeier-web.netlify.app/"
      >
        <img
          src={require('./img/meiersweb.png')}
          className="d-block w-100"
          alt="Portfolio gallery Meiersweb"
        />
      </a>
      <p className="myproject-description">
        My very first site - Meiersweb. Try this... (User: rm PIN: 9999)
      </p>
    </div>
  );
};

export default Meiersweb;
