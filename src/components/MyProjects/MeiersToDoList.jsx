import React from 'react';

const MeiersToDoList = () => {
  return (
    <div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://meierstodolist.herokuapp.com/"
      >
        <img
          src={require('./img/meierstodolist.png')}
          className="d-block w-100"
          alt="Rene Meier's ToDo List"
        />
      </a>
      <p className="myproject-description">
        This is a simple ToDo List which can be stored at internet database.
      </p>
    </div>
  );
};

export default MeiersToDoList;
