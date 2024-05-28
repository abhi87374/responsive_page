import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";

function MyComponent() {
  return (
    <Navbar expand="md" className="my-4">
      <div className="container-fluid">
        <Navbar.Brand href="#">
          <img
            src="https://s3-alpha-sig.figma.com/img/153c/f988/785cdcec05510cbdc9cb1b82a17b77fc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RlKI0LRMfNJBbW33M~apblrBozbU3u0Q9YWLLVvqUZGHbBA8gSDP7EVxEjxXHkjVFjXtk~HQbxUYOLl-H9ieyOpAg2wJEr1OsP5n96o252DHMctnTISvDIL6VBISPtp19bq39nZLdLPvwMw6ic67bWoRI0x~mMfFQNDkERK86B4S2MiFX8zPM7wQGYR3tzsuaN5gQE1yyU~QabQZMPGt~kssUH2oTfgVcXsflWiYbqUdjH7E~LFnJADkRW58ivwxIlNedhE4tw5DevFC4YIZcuC3yCbU1He8tF7P8kkQdzEJiZ10reW8T8lq3~ZlKOT1zY6EnMZhloPS5~l00K9vRw__"
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
                src="./search.svg"
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
                  src="./search.svg"
                  alt="Search icon"
                  className="img-fluid"
                  style={{ width: "20px" }}
                  loading="lazy"
                />
              </span>
            </div>
          </Form>
          <Nav className="d-flex align-items-center">
            <div className="d-flex align-items-center">
              <img
                src="./Explore.svg"
                alt="Icon"
                className="img-fluid"
                style={{ width: "24px" }}
                loading="lazy"
              />
              <NavDropdown title="Explore" id="explore-dropdown">
                <NavDropdown.Item href="#">People - Community</NavDropdown.Item>
                <NavDropdown.Item href="#">Places - Venues</NavDropdown.Item>
                <NavDropdown.Item href="#">Programs - Events</NavDropdown.Item>
                <NavDropdown.Item href="#">Products - Store</NavDropdown.Item>
                <NavDropdown.Item href="#">Blogs</NavDropdown.Item>
              </NavDropdown>
              </div>

<div className="d-flex align-items-center">
  <img
    src="./Hobbies.svg"
    alt="Icon"
    className="img-fluid"
    style={{ width: "24px" }}
    loading="lazy"
  />
  <NavDropdown title="Hobbies" id="hobbies-dropdown">
    <NavDropdown.Item href="#">Action</NavDropdown.Item>
    <NavDropdown.Item href="#">Another action</NavDropdown.Item>
    <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
  </NavDropdown>
</div>
</Nav>

<div className="d-flex align-items-center ms-4">
<img
  src="./bookmark_black_24dp 1.svg"
  alt="Icon"
  className="img-fluid me-2"
  style={{ width: "24px" }}
  loading="lazy"
/>
<img
  src="./notifications_black_24dp 1.svg"
  alt="Icon"
  className="img-fluid me-2"
  style={{ width: "24px" }}
  loading="lazy"
/>
<img
  src="./Product 3.svg"
  alt="Icon"
  className="img-fluid"
  style={{ width: "24px" }}
  loading="lazy"
/>
</div>
<Button variant="outline-primary" className="ms-4" style={{ color: "#8064A2" }}>
Sign In
</Button>
</Navbar.Collapse>
</div>
</Navbar>
);
}

export default MyComponent;

