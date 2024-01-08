import React, { useState } from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import flipkart from "../../assets/Images/flipkart.png";
import { IoSearchOutline } from "react-icons/io5";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { Button, InputGroup, NavDropdown } from "react-bootstrap";

import { GrCart } from "react-icons/gr";

function Header(props) {
  const navigate = useNavigate();
  const { cartCounting, isCartEnables = false, cardData } = props || {};
  // const [cartCount, setCartCount] = useState(0);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userdata"))
  );

  // const [count, setCount] = useState(0);
  // // const [sec, setSec] = useState(new Date().getSeconds);
  // const Count = () => {
  //   setCount(count + 1);
  // };
  // const Minus = () => {
  //   if (count === 0) return;
  //   setCount(count - 1);
  // };

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
  const localStorageCartCounting = JSON.parse(localStorage.getItem("cartData"));
  console.log("localStorageCartCounting", localStorageCartCounting);
  return (
    <>
      <Navbar expand="lg" className="nav-bar">
        <Container className="nav-fixed">
          <Navbar.Brand href="/">
            <img src={flipkart} alt="flip" width={"100px"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-item" href="/home-page">
                Home
              </Nav.Link>

              <Nav.Link className="nav-item" href="/products">
                Product
              </Nav.Link>
              <NavDropdown title="Quick Search" id="basic-nav-dropdown">
                <NavDropdown.Item>Phone</NavDropdown.Item>
                <NavDropdown.Item>Laptops</NavDropdown.Item>
                <NavDropdown.Item>Mackbook</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Skin Care</NavDropdown.Item>
                <NavDropdown.Item>Book</NavDropdown.Item>
                <NavDropdown.Item>Daal</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="nav-item" href="/about-us">
                About
              </Nav.Link>
              <Nav.Link className="nav-item" href="/contact-us">
                Contact
              </Nav.Link>
            </Nav>

            <InputGroup className="search-field">
              <InputGroup.Text id="basic-addon1">
                <IoSearchOutline />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search for products, Brands and more"
                aria-label="Search for products, Brands and more"
                aria-describedby="basic-addon1"
              />
              <Button variant="dark">Search</Button>
            </InputGroup>

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

                  {(localStorageCartCounting?.length || cartCounting) > 0 &&
                    (cartCounting || localStorageCartCounting?.length)}
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
