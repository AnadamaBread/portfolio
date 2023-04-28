import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillMail, AiFillPhone } from "react-icons/ai";

const location = {
  address: "700 Atlantic Ave, Boston, MA 02110",
  lat: 42.3519256,
  lng: 71.0576452,
};

export default function Contact() {
  return (
    <Container className="contact-section">
      <h1 style={{ fontSize: "2.2em", paddingBottom: "20px" }}>
        Contact <strong className="limegreen">Me</strong>
      </h1>
      <Row style={{ display: "center" }}>
        <Col
          style={{
            textAlign: "justify",
            paddingLeft: "30px",
            paddingTop: "15px",
          }}
        >
          <h2>Here is how to reach <strong className="limegreen">me</strong>!</h2>
          <div style={{maxWidth:"600px" }}>
          <p
            style={{
              textAlign: "justify",
              lineHeight: "150%",
              backgroundColor: "#555555",
              padding:"10px",
              fontFamily:"sans-serif", 
              fontSize:"18px",
              paddingRight: "200px"
            }}
          > 
          <br/>
          </p>
          </div>
        </Col>

        <Col
          style={{
            // textAlign: "justify",
            paddingRight: "30px",
            paddingTop: "15px",
          }}
        >
          <div className="google-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188820.14154327317!2d-71.1350872511315!3d42.314485848605365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C%20MA!5e0!3m2!1sen!2sus!4v1682659901208!5m2!1sen!2sus"
              width="600"
              height="500"
              style={{border:0}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>{" "}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
