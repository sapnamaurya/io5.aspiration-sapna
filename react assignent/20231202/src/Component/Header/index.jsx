import React from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="Link-deco" to="/home-Page">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="Link-deco" to="/About">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="Link-deco" to="/Contact">
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="Link-deco" to="/SignUp">
                SignUp
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="Link-deco" to="/Product">
                Product
              </Link>
            </Nav.Link>
          </Nav>
          <NavDropdown
            className="font-color"
            title="Dropdown"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Mobile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Laptops</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Electronics</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Headphones</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
