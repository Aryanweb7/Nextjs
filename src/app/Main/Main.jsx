"use client";

import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div className="container">
      <div className="Hero">
        {/* Mobile Image for small screens */}
        <img
          src="/Flux_Dev_A_3D_illustration_of_a_teenage_boy_with_stylish_short_2.jpg"
          alt="Mobile Only"
          className="mobile-only-img"
        />

        {/* Gradient h1 inline only */}
        <h1
          style={{
            background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Hello, I'm
        </h1>

        <h1>Web Developer</h1>
        <p>
          Hi, I'm Aryan Dhamnaskar — a passionate Web Developer crafting
          responsive and user-friendly websites.
        </p>

        <a href="#Contact">
          <button className="hire_me">Hire Me</button>
        </a>
        <a href="/My cv resume.pdf" download>
          <button className="download_cv">Download CV</button>
        </a>
      </div>

      {/* Hero Image */}
      <div className="hero_img">
        <img
          src="/Flux_Dev_A_3D_illustration_of_a_teenage_boy_with_stylish_short_2.jpg"
          alt="3D boy illustration"
        />
      </div>
    </div>
  );
};

export default Main;
