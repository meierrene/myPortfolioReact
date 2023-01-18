import React from 'react';

const MeiersBlog = () => {
  return (
    <div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://meiersblog.herokuapp.com/"
      >
        <img
          src={require('./img/meiersblog.png')}
          className="d-block w-100"
          alt="Rene Meier's Blog"
        />
      </a>
      <p className="myproject-description">
        I created a own blog to learn Node.JS and MongoDB database. CRUD
        functional.
      </p>
    </div>
  );
};

export default MeiersBlog;
