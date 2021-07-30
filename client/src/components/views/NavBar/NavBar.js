import React, { useState } from "react";
import RightMenu from "./Sections/RightMenu";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Movie listing site</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
          </Nav>
          <RightMenu />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
