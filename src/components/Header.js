import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

function MyComponent() {
  return (
    <Navbar expand="md" className="my-4">
      <div className="container-fluid">
        <Navbar.Brand href="#">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/241e0c91d8805773ffde56a536664542c70d14a86fdbd5d495f50cc239103355?apiKey=a9b31426ea8c42508c8d83a25324d8b5&"
            alt="Logo"
            className="img-fluid"
            style={{ width: "300px" }}
            loading="lazy"
          />
        </Navbar.Brand>
        {/* For mobile view */}
        <div className="d-md-none">
          <Form className="d-flex">
            <Button variant="outline-success">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b2e03e7fc5e1f7bc6e8a738c14b22d61ed888be5e855440c74116c657b7d5a4?apiKey=a9b31426ea8c42508c8d83a25324d8b5&"
                alt="Search icon"
                className="img-fluid"
                style={{ width: "20px" }}
                loading="lazy"
              />
            </Button>
          </Form>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Form className="d-none d-md-flex mx-auto align-items-center">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search here..."
                aria-label="Search"
                style={{ color: "#8064A2" }}
              />
              <span className="input-group-text">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b2e03e7fc5e1f7bc6e8a738c14b22d61ed888be5e855440c74116c657b7d5a4?apiKey=a9b31426ea8c42508c8d83a25324d8b5&"
                  alt="Search icon"
                  className="img-fluid"
                  style={{ width: "20px" }}
                  loading="lazy"
                />
              </span>
            </div>
          </Form>

          <Nav className="d-flex align-items-center">
            <NavDropdown title="Explore" id="explore-dropdown">
              <NavDropdown.Item href="#">People - Community</NavDropdown.Item>
              <NavDropdown.Item href="#">Places - Venues</NavDropdown.Item>
              <NavDropdown.Item href="#">Programs - Events</NavDropdown.Item>
              <NavDropdown.Item href="#">Products - Store</NavDropdown.Item>
              <NavDropdown.Item href="#">Blogs</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Hobbies" id="hobbies-dropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>

            <div className="d-flex align-items-center ms-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/701e9733888cfdff19594600c5c672574b08aa6364ee41f17500f8149275911c?apiKey=a9b31426ea8c42508c8d83a25324d8b5&"
                alt="Icon"
                className="img-fluid me-2"
                style={{ width: "24px" }}
                loading="lazy"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8cad4ac211838d272c805526817ddffdec7905fb8718a487d6f06a79c30151c?apiKey=a9b31426ea8c42508c8d83a25324d8b5&"
                alt="Icon"
                className="img-fluid me-2"
                style={{ width: "24px" }}
                loading="lazy"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ff6fa902e58f9af0ebd6f490f7c685a246e62c0f24de198b7a691f942021f1f?apiKey=a9b31426ea8c42508c8d83a25324d8b5&"
                alt="Icon"
                className="img-fluid"
                style={{ width: "24px" }}
                loading="lazy"
              />
            </div>
            <Button variant="outline-primary" className="ms-4" style={{ color: "#8064A2" }}>
              Sign In
            </Button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default MyComponent;
