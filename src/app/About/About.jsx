"use client";

import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [view, setView] = useState('skills');

  const renderView = () => {
    switch (view) {
      case 'certification':
        return (
          <div className="certification_list">
            <ul>
              <li>Udemy</li>
              <li>
                Learn Complete Modern Front-End Web Development Step-by-Step
                <q>Instructors Fatah Gabrial</q>
              </li>
              <li><a href='public\Front-End Certification.pdf'>Download certificate</a></li>
            </ul>
          </div>
        );
      case 'education':
        return (
          <div className="education_list">
            <ul>
              <li>Pursuing BBA-CA</li>
              <li>Indira College of Commerce & Science</li>
            </ul>
          </div>
        );
      default:
        return (
          <div className="skill_list">
            <ul>
              <li>Next.js</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
            </ul>
          </div>
        );
    }
  };

  return (
    <section id='About'>
    <div className='about'>
      <div className="about_img">
        <img
          src="/Flux_Dev_A_cozy_and_modern_digital_workspace_setup_in_soft_mor_3.jpg"
          alt="3D laptop illustration"
        />
      </div>
      <div className="about_desc">
        <h1>About Me</h1>
        <p>
          I am a front-end web developer with a passion for creating
          interactive and responsive web applications. I have experience working
          with JavaScript, React, Redux, Next.js, Bootstrap, APIs, HTML, CSS,
          and Git. I am a quick learner and I am always looking to expand my
          knowledge and skill set. I am a team player and I am excited to work
          with others to create amazing applications.
        </p>
        <div className="about_sessions">
        <button onClick={() => setView('skills')}>Skills</button>
        <button onClick={() => setView('education')}>Education</button>
        <button onClick={() => setView('certification')}>Certifications</button>
      </div>
       <div className="about_section_content">{renderView()}</div>
      </div>
     </div>
    </section>
  );
};

export default About;
