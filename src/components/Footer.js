import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MyComponent2() {
  return (
    <main className="bg-white d-flex flex-column font-weight-light p-4">
      <Container>
        <Row>
          <Col md={3} className="d-flex flex-column">
            <h1 className="font-weight-bold">Hobbycue</h1>
            <a href="#" className="text-dark mb-2">
              About Us
            </a>
            <a href="#" className="text-dark mb-2">
              Our Services
            </a>
            <a href="#" className="text-dark mb-2">
              Work with Us
            </a>
            <a href="#" className="text-dark mb-2">
              FAQ
            </a>
            <a href="#" className="text-dark mb-2">
              Contact Us
            </a>
          </Col>
          <Col md={3} className="d-flex flex-column mt-4 mt-md-0">
            <h2 className="font-weight-bold">How Do I</h2>
            <a href="#" className="text-dark mb-2">
              Sign Up
            </a>
            <a href="#" className="text-dark mb-2">
              Add a Listing
            </a>
            <a href="#" className="text-dark mb-2">
              Claim Listing
            </a>
            <a href="#" className="text-dark mb-2">
              Post a Query
            </a>
            <a href="#" className="text-dark mb-2">
              Add a Blog Post
            </a>
            <a href="#" className="text-dark mb-2">
              Other Queries
            </a>
          </Col>
          <Col md={3} className="d-flex flex-column mt-4 mt-md-0">
            <h2 className="font-weight-bold">Quick Links</h2>
            <a href="#" className="text-dark mb-2">
              Listings
            </a>
            <a href="#" className="text-dark mb-2">
              Blog Posts
            </a>
            <a href="#" className="text-dark mb-2">
              Shop / Store
            </a>
            <a href="#" className="text-dark mb-2">
              Community
            </a>
          </Col>
          <Col md={3} className="d-flex flex-column mt-4 mt-md-0">
            <h2 className="font-weight-bold">Social Media</h2>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc799829773953f1f8f956bbd5ff9303bcbbd59720e2a873cad3568242580b7d?apiKey=a9b31426ea8c42508c8d83a25324d8b5&"
              alt="Social Media Image"
              className="img-fluid rounded mt-3"
            />
            <div className="mt-3">
              <h2 className="font-weight-bold mb-2">Invite Friends</h2>
              <Form className="form-inline">
                <Form.Label htmlFor="emailInput" className="visually-hidden">
                  Email ID
                </Form.Label>
                <Form.Control
                  type="email"
                  id="emailInput"
                  placeholder="Email ID"
                  aria-label="Email ID"
                  className="mr-2 mb-2 mb-md-0"
                />
                <Button type="submit" variant="primary" className="mb-2 mb-md-0">
                  Invite
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <footer className="bg-light text-center font-weight-light py-4 mt-5">
        © Purple Cues Private Limited
      </footer>
    </main>
  );
}

export default MyComponent2;
