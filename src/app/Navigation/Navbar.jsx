
'use client';

import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">MyLogo</a>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
  <li>
    <a href="#About" style={{
      background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }}>
      About
    </a>
  </li>
  <li>
    <a href="#Project" style={{
      background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }}>
      Projects
    </a>
  </li>
  <li>
    <a href="#Contact" style={{
      background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }}>
      Contact
    </a>
  </li>
</ul>

    </nav>
  );
};

export default Navbar;
