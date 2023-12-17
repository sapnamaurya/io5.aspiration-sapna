import React, { useState } from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function Header(props) {
  const { curPage } = props || {};
  const [count, setCount] = useState(0);
  // const [sec, setSec] = useState(new Date().getSeconds);
  const Count = () => {
    setCount(count + 1);
  };
  const Minus = () => {
    if (count == 0) return;
    setCount(count - 1);
  };

  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const hour = new Date().getHours();
  const min = new Date().getMinutes();
  const sec = new Date().getSeconds();
  // console.log(secs);
  // setInterval(() => {
  //   setSec(new Date().getSeconds);
  // }, 1000);

  return (
    <>
      <Navbar bg="dark" className="cont" data-bs-theme="dark">
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
              <Link className="Link-deco" to="/Login">
                Login
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="Link-deco" to="/Product">
                Product
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Button onClick={Count}>+</Button> Count : {count}
              <Button onClick={Minus}>-</Button>
            </Nav.Link>
          </Nav>
          <h3 className="text">{curPage}</h3>
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
        <Nav className="font-color1">
          {date}/{month + 1}/{year} --- {hour}:{min}:{sec}
        </Nav>
      </Navbar>
    </>
  );
}

export default Header;
