import React from "react";
import Card from "react-bootstrap/Card";

export default function AboutText() {
  return (
    <Card>
      <Card.Body>
          <p
            style={{
              textAlign: "justify",
              lineHeight: "150%",
              backgroundColor: "#555555",
              padding:"10px",
              fontFamily:"sans-serif", 
              fontSize:"18px"
            }}
          >
            Greetings! I'm <strong className="limegreen">Luis Baez</strong> a
            current Associate Researcher in <br />
            Cybersecurity at SIFT (Smart Information Flow Technologies).
            <br />
            <br /> I've achieved a Master's of Science in{" "}
            <strong className="limegreen">Computer Science</strong> <br /> from
            the <strong className="bleed">University of South Carolina!</strong>{" "}
            During college,
            <br /> I enrolled in courses focusing on Data Structures, Algorithm{" "}
            <br /> design, Application Development, Network Security, and <br />{" "}
            Neuromorphic Computing. Outside of class, I participated <br /> in
            numerous cybersecurity events including Blue-team <br /> Cyber
            Defense competitions and Capture-The-Flag (CTFs). <br />
            <br /> Previously, I worked on campus as a Resident Mentor and{" "}
            <br />
            as an IT Specialist for the Chemical Engineering and <br />
            Biomedical Engineering departments. Over the summer,
            <br /> I interned with CVS Health as a Software Engineer in Test and{" "}
            <br />
            automation. During graduate school, I succeeded in research <br />
            with the Civil Engineering department, where I worked on ArcGIS{" "}
            <br />
            systems.
            <br />
            <br />
            Outside of academic and professional experiences, I enjoy <br />
            learning new programming strategies via side-projects. My personal{" "}
            <br />
            projects include mobile applications for Android and iOS, video
            <br /> games, arduino-based projects, and linux developments.
            <br />
            Outside of tech, I enjoy skateboarding, cooking, cleaning, <br />
            playing games, and traveling!
          </p>        
      </Card.Body>
    </Card>
  );
}
