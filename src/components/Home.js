import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Typewriter from "typewriter-effect";
import myself from "../images/grad0_1.png";

export default function home() {
    return (
        <section id="home">
            <Container fluid classname="home-section" id="home">
                <Particle/>
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 5}} className="heading">
                                Howdy!{" "}
                                <span role="img" aria-label="cowboy">🤠</span>
                            </h1>
                            <h1 className="Heading-name">
                                Me llamo
                                <strong className="limegreen"> Luis Baez</strong> 
                                .
                            </h1>
                            <h2 style={{ fontSize:"16px"}}>
                                Associate Researcher, Computer Science M.S<br/>
                                <strong className="limegreen"> Boston, MA.</strong> 
                            </h2>
                            <div style={{ padding: 50, textAlign:"center"}}>
                            <img src={myself} style={{maxHeight: "400px"}}></img>
                            </div>
                            <div style={{ padding: 25, textAlign: "center"}}>
                                <Typewriter options={{
                                    strings:[
                                        "Vulnerability Research",
                                        "Security Engineering",
                                        "Incident Response",
                                        "Neuromorphic Computing",
                                        "Application Development",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 35,
                                }}
                                />
                            </div>
                            
                        </Col>


                    </Row>
                </Container>
            </Container>
        </section>

    );
}