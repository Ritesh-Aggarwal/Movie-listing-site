import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import RightMenu from "./Sections/RightMenu";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="Logo"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          MoviesDB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/favourites">Favourites</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
          </Nav>
          <RightMenu />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
