'use client';

import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Email sent successfully!');
    // Optional: Reset the fields
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section id='Contact'>
    <div className='container'>
      <div className="description">
        <h1>Let's Connect</h1>
        <p>I'm currently looking for new opportunities, my inbox is 
          always open. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!</p>
        <div className="links">
          <a href='https://www.linkedin.com/in/aryan-dhamnaskar-1504a8368'>
            <img src='/linkedin.png' alt="LinkedIn" />
          </a>
          <a href='https://github.com/Aryanweb7'>
            <img src='/github.png' alt="GitHub" />
          </a>
        </div>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>Your email</label>
          <input
            type='email'
            placeholder='jacob@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Subject</label>
          <input
            type='text'
            placeholder='Your Subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />

          <label>Message</label>
          <textarea
            placeholder='Enter your message...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            required
          />

          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
    </section>
  );
};

export default Contact;
