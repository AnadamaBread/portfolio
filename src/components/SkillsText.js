import React from "react";
import Card from "react-bootstrap/Card";

export default function SkillsText() {
  return (
    <Card>
      <Card.Body>
        <p
          style={{
            textAlign: "justify",
            lineHeight: "150%",
            backgroundColor: "#555555",
            padding: "10px",
            fontFamily: "sans-serif",
            fontSize: "18px",
          }}
        >
          Currently, my strongest programming language is{" "}
          <strong className="limegreen">Python3</strong> for it's capabilities
          in network and security engineering. My primary driver is a Fedora 35
          Workstation loaded with the development tools I leverage daily including: 
          <ul style = {{fontSize:"16px", listStyle:"none"}}>
            <li> VSCode </li>
            <li> Konsole </li>
            <li> Oh-my-zsh </li>
            <li> tmux </li>
            <li> Doom Emacs </li>
          </ul>
        </p>
         

      </Card.Body>
    </Card>
  );
}
