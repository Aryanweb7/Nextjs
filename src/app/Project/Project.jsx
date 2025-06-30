"use client";

import React, { useState } from 'react';
import './Project.css';

const Project = () => {
  const [view, setView] = useState('all');

  return (
    <section id='Project'>
    <div className="container">
      <h1>My Projects<br></br></h1>
        <br></br>
      <div className="Project_section">
        <button onClick={() => setView('all')}>All</button>
        <button onClick={() => setView('react_nextjs')}>React & Next.js</button>
        <button onClick={() => setView('html_css_bootstrap')}>HTML, CSS & Bootstrap</button>
      </div>

      {/* ALL Projects */}
      {(view === 'all' || view === 'react_nextjs') && (
        <div className="projects-grid" id="react_nextjs">
          {/* CARD 1 */}
          <div className="card">
            <a href="https://celadon-lollipop-e70545.netlify.app/">
              <img src="/stopwatch.jpg" alt="Stopwatch Project" />
            </a>
            <div className="card-header"><h2>Stop Watch</h2></div>
            <div className="card-body">
              <p>A clean, responsive stopwatch built using React.js...</p>
            </div>
          </div>
          {/* CARD 2 */}
          <div className="card">
            <a href="https://friendly-pavlova-180860.netlify.app/">
              <img src="/Simple To Do List App UI Concent.jpg" alt="To Do List" />
            </a>
            <div className="card-header"><h2>To Do List</h2></div>
            <div className="card-body">
              <p>A responsive and interactive To-Do List app in React.js...</p>
            </div>
          </div>
          {/* CARD 3 */}
          <div className="card">
            <a href="https://flourishing-toffee-83cbdf.netlify.app/">
              <img src="/by Gloud.jpg" alt="Simple Interest Calculator" />
            </a>
            <div className="card-header"><h2>Simple Interest Calculator</h2></div>
            <div className="card-body">
              <p>A simple interest calculator built with React.js...</p>
            </div>
          </div>
          {/* CARD 4 */}
          <div className="card">
            <a href="https://celebrated-mochi-378992.netlify.app/">
              <img src="/Check out new work on my @Behance portfolio_ _BMI….jpg" alt="BMI Calculator" />
            </a>
            <div className="card-header"><h2>BMI Calculator</h2></div>
            <div className="card-body">
              <p>A responsive BMI calculator built using React.js...</p>
            </div>
          </div>
        </div>
      )}

      {/* HTML CSS Projects */}
      {(view === 'all' || view === 'html_css_bootstrap') && (
        <div className="projects-grid" id="html_css_bootstrap">
          {/* CARD 5 */}
          <div className="card">
            <a href="https://harmonious-mousse-a5bc58.netlify.app/">
              <img src="/Screenshot 2025-06-30 081157.png" alt="Prime Inspire Website" />
            </a>
            <div className="card-header"><h2>Prime Inspire Website</h2></div>
            <div className="card-body">
              <p>Professional organization website built with HTML, CSS & Bootstrap.</p>
            </div>
          </div>
          {/* CARD 6 */}
          <div className="card">
            <a href="https://dulcet-hummingbird-43039c.netlify.app/">
              <img src="/Screenshot 2025-06-30 081521.png" alt="Blog Website" />
            </a>
            <div className="card-header"><h2>Blog Website</h2></div>
            <div className="card-body">
              <p>A responsive blog layout showcasing written content using Bootstrap.</p>
            </div>
          </div>
          {/* CARD 7 */}
          <div className="card">
            <a href="https://dulcet-hummingbird-43039c.netlify.app/">
              <img src="/👟 Step Up Your Game with Puma_ Now in Light and….jpg" alt="Puma Website Clone" />
            </a>
            <div className="card-header"><h2>Puma Website</h2></div>
            <div className="card-body">
              <p>A homepage clone of the Puma website designed with HTML and CSS.</p>
            </div>
          </div>
        </div>
      )}
    </div>
    </section>

  );
};

export default Project;
