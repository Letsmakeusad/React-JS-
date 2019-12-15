import React from 'react';
import './Navigation.css';
import Link from '../shared/Link/Link';

function Navigation({ isLogged, user }) {
  return <nav className="Navigation">
    <ul>
      <Link to="/">
        <img id="logo" src="/ghostR.png" alt="my-app-logo" />
      </Link>
      <Link to="/">Posts</Link>
      {isLogged && <Link to="/create-posts">New Post</Link>}
      {isLogged && <Link to="/profile">Profile</Link>}
      {!isLogged && <Link to="/register">Register</Link>}
      {!isLogged && <Link to="/login">Login</Link>}
      {isLogged && <Link to="/logout">Logout</Link>}
      <Link>Scarry Stories && Friendly Ghosts Blog</Link>
    </ul>
  </nav>;
};

export default Navigation;