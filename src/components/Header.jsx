import React from 'react';

function Header() {
  const initUrl = '#';
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark nav-container "
      id="home-btn"
    >
      <a className="menu-icons" href={initUrl}>
        Home
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="menu-icons" href="#aboutme">
              About me
            </a>
          </li>
          <li className="nav-item">
            <a className="menu-icons" href="#myprojects">
              My Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="menu-icons" href="#cta">
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
