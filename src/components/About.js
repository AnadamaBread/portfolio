import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutImg from "../images/extra.png";
import AboutText from "./AboutText";

export default function About() {
  return (
    <section id="about">
      <Container className="about-section">
        <h1 style={{ fontSize: "2.2em", paddingBottom: "20px" }}>
          About <strong className="limegreen">Luis</strong>
        </h1>
        <Row style={{ display:"center"}}>
          <Col style={{textAlign:"justfiy"}}>
            {/* <div style={{ maxWidth: "650px", paddingLeft:"200px "}}> */}
              <AboutText />
            {/* </div> */}
          </Col>
          <Col style={{ textAlign:"right", paddingRight:"300px"}}>
            <img src={aboutImg} style={{ paddingTop:"50px", paddingLeft:"200px" }}></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
