import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { user, token, logout } = useAuth();
  console.log(token);

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
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
        <div className="user hero ms-auto">
          {user && token && (
            <button className="btn btn-primary me-2" onClick={logout}>
              Logout
            </button>
          )}
          <span>
            {user && token ? (
              `Hi, ${user.name}`
            ) : (
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            )}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
