import React, { Component, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineLaptop,
  AiOutlineIdcard,
  AiOutlineUser,
  AiOutlineWifi,
} from "react-icons/ai";

export default function Header() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  // Handle scrolling on browser
  function scrollhandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  window.addEventListener("scroll", scrollhandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav defaultActiveKey="#home">
          <Nav.Item>
            <ul class="menu flex-row">
              <li>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineHome style={{ marginBottom: "5px" }} /> Home
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  as={Link}
                  to="/about"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineUser style={{ marginBottom: "5px" }} /> About
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  as={Link}
                  to="/resume"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineIdcard style={{ marginBottom: "5px" }} /> CV
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  as={Link}
                  to="/skills"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineLaptop style={{ marginBottom: "5px" }} /> Stack
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineWifi style={{ marginBottom: "5px" }} /> Contact
                </Nav.Link>
              </li>
            </ul>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}
