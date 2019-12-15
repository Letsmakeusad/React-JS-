import React from 'react';
import './Footer.css';
import Link from '../shared/Link/Link';

function Footer({ isLogged }) {
  return <nav className="Footer">
    <ul>
  
    <Link to='/'>  <img id="logo" src="/hand.png" alt="my-app-logo" /></Link>
    </ul>
  </nav>;
};

export default Footer;