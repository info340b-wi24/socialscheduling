import React from 'react';
import { Link } from 'react-router-dom';

export function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Scent Seeker</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {/* <Link className="nav-item nav-link" to="/home">Home</Link> */}
          <Link className="nav-item nav-link" to="/search">Search</Link>
          <Link className="nav-item nav-link" to="/quiz">Quiz</Link>
          <Link className="nav-item nav-link" to="/my-list">My List</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
