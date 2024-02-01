import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NikeNavBar() {
  const navi = useNavigate();

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => navi("/")}>Nike</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navi("/men")}>Men</Nav.Link>
            <Nav.Link onClick={() => navi("/women")}>Women</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NikeNavBar;
