import React from 'react';
import './Footer.css';
import Link from '../shared/Link/Link';

function Footer({ isLogged }) {
  return <nav className="Footer">
    <ul>
    <img id="logo" src="/ghostR.png" alt="my-app-logo" />
    </ul>
  </nav>;
};

export default Footer;