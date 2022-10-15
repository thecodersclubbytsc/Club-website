import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container, Row, Col
} from 'react-bootstrap';
import './thecodersclub.css';
import { FaGithubSquare, FaLinkedin} from 'react-icons/fa';


export default function Header(props) {
    return (
        <div className="root" >
            <Container fluid >
                <Row className="mentor-card">

                    <Col lg={6} className="domain-content">
                        <h2>{props.domain}</h2>
                        <p>{props.content}</p>
                    </Col>

                    <Col className="mentor">
                    <img src={props.img1} className="mentor-img" alt="mentor1" />
                        <h4> {props.mentor1name}</h4>
                        <div>
                            <span>
                            <a href={props.mentor1linkedin} rel="noreferrer" target="_blank"><FaLinkedin className="linkedinico" /></a>
                            <a href={props.mentor1github} rel="noreferrer" target="_blank">{ props.mentor1github && <FaGithubSquare className="githubico" />}</a>
                            </span>
                        </div>
                    </Col>

                    <Col className="mentor">
                    <img src={props.img2} className="mentor-img" alt="mentor2" />
                        <h4>{props.mentor2name}</h4>
                        <div>
                            <span>
                            <a href={props.mentor2linkedin} rel="noreferrer" target="_blank"><FaLinkedin className="linkedinico" /></a>
                            <a href={props.mentor2github} rel="noreferrer" target="_blank">{ props.mentor2github && <FaGithubSquare className="githubico" />}</a>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
