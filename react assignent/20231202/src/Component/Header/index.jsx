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
  const [searchDataHandle, setSearchDataHandle] = useState("");

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userdata"))
  );

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
  // console.log("localStorageCartCounting", localStorageCartCounting);

  const handleProductCategory = (e, path, productName) => {
    navigate(`/${path}`, {
      state: { type: productName.type, value: productName.value },
    });
  };
  const handleSearch = (e) => {
    setSearchDataHandle(e.target.value);
  };
  const handleSearchButton = () => {
    // if (!searchDataHandle) return;
    // navigate("/product", {
    //   state: { type: "search", value: searchDataHandle },
    // });
  };

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

              <Nav.Link className="nav-item" href="/product">
                Product
              </Nav.Link>
              <NavDropdown title="Quick Search" id="basic-nav-dropdown">
                <NavDropdown.Item
                  onClick={(e) =>
                    handleProductCategory(e, "product", {
                      type: "Phone",
                      value: "phone",
                    })
                  }
                >
                  Phone
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={(e) =>
                    handleProductCategory(e, "product", {
                      type: "laptop",
                      value: "laptop",
                    })
                  }
                >
                  Laptops
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={(e) =>
                    handleProductCategory(e, "product", {
                      type: "macbook",
                      value: "macbook",
                    })
                  }
                >
                  Mackbook
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={(e) =>
                    handleProductCategory(e, "product", {
                      type: "skin care",
                      value: "skin care",
                    })
                  }
                >
                  Skin Care
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={(e) =>
                    handleProductCategory(e, "product", {
                      type: "book",
                      value: "book",
                    })
                  }
                >
                  Book
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={(e) =>
                    handleProductCategory(e, "product", {
                      type: "daal",
                      value: "daal",
                    })
                  }
                >
                  Daal
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="nav-item" href="/about">
                About
              </Nav.Link>
              <Nav.Link className="nav-item" href="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <div>
              <InputGroup className="search-field">
                <InputGroup.Text id="basic-addon1">
                  <IoSearchOutline />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search for products, Brands and more"
                  aria-label="Search for products, Brands and more"
                  aria-describedby="basic-addon1"
                  value={searchDataHandle}
                  onChange={(e) => handleSearch(e)}
                />
                <Button
                  variant="dark"
                  disabled={!searchDataHandle}
                  onClick={handleSearchButton}
                >
                  Search
                </Button>
              </InputGroup>
            </div>
            <div style={{ display: " flex", marginRight: " 12%" }}>
              {Boolean(user) && (
                <>
                  <img
                    className="imag"
                    src={user?.image}
                    alt={user?.username}
                  />
                  <p className="Link-deco name">{user?.firstName}</p>
                </>
              )}
            </div>

            {!user?.email && (
              <Nav.Link>
                <Link className="Link-deco" to="/Login">
                  <Button variant="success" className="text">
                    Login
                  </Button>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
