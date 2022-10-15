import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container, Row, Col, Button, Navbar
} from 'react-bootstrap';

import './thecodersclub.css';
import illustration from '../../images/img1.svg'
import logoharsh from '../../images/logoharsh.png'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="coders-header">
            <Navbar >
                <Navbar.Brand href="#" className="py-4"></Navbar.Brand>
            </Navbar>
            <Container >
                <Row>
                    <Col className="title">
                        <div className="left-box">
                            <img src={logoharsh} height="100" width="100" style={{ marginLeft: '-20px' }} alt="club-logo"/>
                            <h1>The Coders Club</h1>
                            <p>Club by the students of <Link to='/'>The StartUp Club</Link> who strive to build diverse and inclusive spaces to learn skills, 
                                share their experiences, and build projects together. We help fellow students build their coding skills online, 
                                organizing virtual hackathon to solve real-world challenges, organize talk show and many more.</p>
                            <Button variant="primary">Register</Button>
                        </div>
                    </Col>
                    <Col>
                        <img src={illustration} className="hero_image" alt="illustration" />
                    </Col>
                </Row>
            </Container>
            <div class='mouse-container'>
                <div class='mouse'>
                    <span class='scroll-down'></span>
                </div>
            </div>
        </div>
    )
}
