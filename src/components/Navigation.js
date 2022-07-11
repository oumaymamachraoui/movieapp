import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" exact>
            {" "}
            <img
              src="https://is4-ssl.mzstatic.com/image/thumb/Purple124/v4/dc/0a/08/dc0a0880-d5a1-8b8d-8ea6-1f52b70e6a5e/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1024x1024bb.png"
              alt="movie app"
              width={80}
              height={80}
            />{" "}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/add_movie">Add Movie</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
