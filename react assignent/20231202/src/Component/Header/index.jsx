import React, { useState } from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import { GrCart } from "react-icons/gr";

function Header(props) {
  const navigate = useNavigate();
  const { cartCounting, isCartEnables = false, cardData } = props || {};
  const [cartCount, setCartCount] = useState(0);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userdata"))
  );

  const [count, setCount] = useState(0);
  // const [sec, setSec] = useState(new Date().getSeconds);
  const Count = () => {
    setCount(count + 1);
  };
  const Minus = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const hour = new Date().getHours();
  const min = new Date().getMinutes();
  const sec = new Date().getSeconds();

  setInterval(() => {
    setUser(JSON.parse(localStorage.getItem("userdata")));
  }, 1000);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/Login");
  };
  const handleCartButton = () => {
    console.log("cart", cardData);
    navigate("/Cart");
  };
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
              <Link className="Link-deco" to="/Product">
                Product
              </Link>
            </Nav.Link>
            <NavDropdown
              className="font-color"
              title="Dropdown"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Mobile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Laptops</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Electronics
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Headphones</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Button onClick={Count}>+</Button> Count : {count}
              <Button onClick={Minus}>-</Button>
            </Nav.Link>
          </Nav>
          {Boolean(user) && (
            <>
              <img className="imag" src={user?.image} alt={user?.username} />
              <p className="Link-deco name">
                {user?.firstName} {user?.lastName}
              </p>
            </>
          )}
          {isCartEnables && (
            <Nav.Link>
              <Button
                variant="secondary"
                className="text1"
                onClick={handleCartButton}
              >
                <GrCart />
                {cartCounting > 0 && cartCounting}
              </Button>
            </Nav.Link>
          )}

          {!user?.email && (
            <Nav.Link>
              <Link className="Link-deco" to="/Login">
                <Button className="text">Login</Button>
              </Link>
            </Nav.Link>
          )}

          {user?.email && (
            <Nav.Link>
              <Link className="Link-deco" to="/Login">
                <Button
                  variant="success"
                  className="text"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Link>
            </Nav.Link>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
