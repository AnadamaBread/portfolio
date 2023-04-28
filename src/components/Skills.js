import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiNodejs,
  DiPython,
  DiGit,
  DiLinux,
  DiVisualstudio,
  DiDocker,
  DiFirebase,
  DiAngularSimple,
} from "react-icons/di";

import SkillsText from "./SkillsText";

export default function Skills() {
  return (
    <Container className="skills-section">
      <h1 style={{ fontSize: "2.2em", paddingBottom: "20px" }}>
        Current <strong className="limegreen">Skills</strong>
      </h1>
      <Row
        style={{
          justifyContent: "center",
          position: "top",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <div className="tech-icons">
            <DiPython/>
        </div>
        <div className="tech-icons">
            <DiJavascript1/>
        </div>
        <div className="tech-icons">
            <DiNodejs/>
        </div>
        <div className="tech-icons">
            <DiAngularSimple/>
        </div>
        <div className="tech-icons">
            <DiGit/>
        </div>

        <Col>
          <SkillsText />
        </Col>
      </Row>
    </Container>
  );
}
