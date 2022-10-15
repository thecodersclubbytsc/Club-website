import React from 'react'
import debo from '../../images/mentors/debo.jpg'
import './thecodersclub.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export default function leadCard() {
    return (
        <div className='lead-card'>
            <div className='lead-content'>
                <h2 className='lead-title'>Tech Lead</h2>
                <img src={debo} className="mentor-img my-3" alt="lead" />
                <h4>DeboPriya Dey</h4>
                <div>
                    <span>
                        <a href="https://www.linkedin.com/in/debopriya-dey" rel="noreferrer" target="_blank"><FaLinkedin className="linkedinico" /></a>
                        <a href="https://www.github.com/debopriyadey" rel="noreferrer" target="_blank"><FaGithubSquare className="githubico" /></a>
                    </span>
                </div>
            </div>

        </div>
    )
}
