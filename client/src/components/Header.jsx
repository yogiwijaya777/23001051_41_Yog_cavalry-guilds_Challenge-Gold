import { useState } from 'react';

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid ">
        <a className="navbar-brand text-light" href="/">
          Cavalry Guilds
        </a>
        <button
          className="navbar-toggler bg-white ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  " id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link text-light active" aria-current="page" href="/top-decks">
                Top Decks
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#about">
                About
              </a>
            </li>
          </ul>
        </div>
        <p>{isLogin ? 'Name of User' : ''}</p>
      </div>
    </nav>
  );
};

export default Header;
