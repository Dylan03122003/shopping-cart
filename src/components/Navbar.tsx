import React from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity !== 0 && (
          <Button
            onClick={openCart}
            style={{ height: "3rem", width: "3rem", position: "relative" }}
            className="rounded-circle"
            variant="outline-primary"
          >
            <AiOutlineShoppingCart />
            <div className="rounded-circle cart_circle">{cartQuantity}</div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
