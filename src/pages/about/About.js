import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      <div className='about-page'>
        <h1> About This App </h1>
        <p> App to Search Github User </p>
        <p> Version: 1.0.0 </p>
      </div>
      <br />
      <div>
        <br />
        <h3> Contact </h3>
        <br />
        <ul>
          <li>
            <i className='far fa-envelope'>
              <a href='https://mail.google.com/'> Email</a>
            </i>
          </li>

          <li>
            <i className='fab fa-github'>
              <a href='https://github.com'> Github </a>
            </i>
          </li>
          <li>
            <i className='fab fa-twitter'>
              <a href='https://twitter.com/'> Twitter </a>
            </i>
          </li>
          <li>
            <i className='fab fa-linkedin'>
              <a href='https://www.linkedin.com/'> Linked-In </a>
            </i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
