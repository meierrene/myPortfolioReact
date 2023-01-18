import React from 'react';
import Forkify from './MyProjects/Forkify';
import MarioBros from './MyProjects/MarioBros';
import MeiersBlog from './MyProjects/MeiersBlog';
import Natours from './MyProjects/Natours';

const Myprojects = () => {
  return (
    <div className="myprojects-container">
      <h2 className="h2-title">My highlighted projects</h2>

      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div
          className="myprojects-thumbnail carousel-inner"
          data-bs-interval="10"
        >
          <div className="carousel-item active">
            <MarioBros />
          </div>
          <div className="carousel-item">
            <Natours />
          </div>
          <div className="carousel-item">
            <Forkify />
          </div>
          <div className="carousel-item">
            <MeiersBlog />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Myprojects;
