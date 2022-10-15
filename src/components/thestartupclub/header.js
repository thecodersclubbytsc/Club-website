import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom'
import './css/Header.css'

import bg from '../../images/allBackground.svg'
import logo from '../../images/logo.png'

export default function Header() {
  return (
    <div className="header">
      <div className="header-background">
        <img src={bg} alt="" />

      </div>
      <div className="nav">
        <img src={logo} alt="logo" className="logo" />
        <ul className="mr-5">
          <li> <Link to="/thecodersclub" className="links thecodersclub" target="_blank">The Coders Club</Link> </li>
          <li> <Button className="links"> <a href="https://forms.gle/QSWxqBNQ1yKwj5V97" target="_blank" rel="noreferrer">Register</a> </Button></li>
        </ul>
      </div>

      <div className="main">
        <div className="hero-text-box">
          <h1>The Startup Club</h1>
          <h5 className="">Your Playground for ideas and inovations </h5>
          <br />
          <p>We are a bunch of engineering students from MCKV Institute of Engineering (Howrah, West Bengal, India), trying to make dents in the universe and create a safe space and rich culture for fellow aspiring entrepreneurs! We have dared to dream big! We actively organize exciting and engaging entrepreneurial activities.</p>
          <div className="stats">
            <div className="registeredCount pr-5">
              <p className="stats-header">Members</p>
              <h4 className="stats-value text-left">400+</h4>
            </div>
            <div className="eventsDone">
              <p className="stats-header">Events Done</p>
              <h4 className="stats-value text-left">25+</h4>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}