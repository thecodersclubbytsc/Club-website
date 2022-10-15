import React from 'react'
import './thecodersclub.css'
import { FaInstagram, FaTelegramPlane, FaYoutube, FaBloggerB, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row footer-content">
                    <div className="col my-5">
                        <h1 className="footer-text-main">Unlock your full potential</h1>
                        <h1 className="footer-text-main">Join Us.</h1>
                        <h1>
                            <a href="https://www.instagram.com/thecodersclubbytsc/" rel="noreferrer" target="_blank"><FaInstagram className="p-1" /></a>
                            <a href="https://t.me/thecodersclub" rel="noreferrer" target="_blank"><FaTelegramPlane className="p-1" /></a>
                            <a href="https://www.youtube.com/channel/UC4rAk7q5b3yFQ54mVyhoMJQ" rel="noreferrer" target="_blank"><FaYoutube className="p-1" /></a>
                            <a href="https://thecodersclubbytsc.blogspot.com/" rel="noreferrer" target="_blank"><FaBloggerB className="p-1" /></a>
                        </h1>
                    </div>
                </div>
            </div>
            <hr style={{ backgroundColor: '#fff' }} />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 social-text">
                        <h4>an initiative by <Link to='/'>The StartUp Club</Link></h4>
                    </div>
                    <div className="col-sm-12 col-md-6 social-startup-container">
                        <a href="mailto:startupclub@mckvie.edu.in" >startupclub@mckvie.edu.in</a>
                        <a href="https://www.instagram.com/thestartupclubbymckvie" rel="noreferrer" target="_blank"><FaInstagram className="px-2 social-startup" /></a>
                        <a href="https://www.facebook.com/thestartupclubbymckvie" rel="noreferrer" target="_blank"><FaFacebook className="px-2 social-startup" /></a>
                        <a href="https://www.youtube.com/channel/UC4rAk7q5b3yFQ54mVyhoMJQ" rel="noreferrer" target="_blank"><FaYoutube className="px-2 social-startup" /></a>
                    </div>
                </div>
            </div>
        </div >
    )
}
