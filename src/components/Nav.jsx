import React,  {useState} from "react";
import "../styles/nav.css";
import Home from "./Home";
import Portfolio from "./Portfolio";
import { Link } from "react-scroll";
import { Nav, Navbar, Container } from "react-bootstrap"
import Resume from "./Resume";
import Footer from "./Footer";

export default function Navigation() {

  
  
  return (
    <>
      <Navbar className="navbar"  expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="home" href="#home">&#60;Magesh/&#62;</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto navlink">
            <Link className="link" to="home">Home</Link>
            <Link className="link" to="portfolio">Portfolio</Link>
            <Link className="link" to="resume">Resume</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Home />
      <Portfolio />
      <Resume/>
      <Footer/>
    </>
  );
}
