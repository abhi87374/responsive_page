import React from "react";
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const InfoCard = ({ imgSrc, title, content, altText, buttonText, borderColor }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <Card
      className="mb-4"
      style={{
        border: `2px solid ${borderColor}`,
        transition: "background-color 0.3s ease",
        backgroundColor: hovered ? borderColor : "#ffffff",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Card.Body>
        <div className="d-flex align-items-center mb-3">
          <Image
            src={imgSrc}
            alt={altText}
            className="img-fluid me-3"
            style={{
              width: "40px",
              aspectRatio: "1",
              objectFit: "cover",
              filter: hovered ? "brightness(0) invert(1)" : "none", // Invert icon color on hover
            }}
          />
          <h5 className="card-title mb-0" style={{ color: hovered ? "#ffffff" : "#000000" }}>{title}</h5>
        </div>
        <p className="card-text" style={{ color: hovered ? "#ffffff" : "#000000" }}>{content}</p>
        <Button
          variant="outline-primary"
          style={{
            color: hovered ? "#ffffff" : "#000000",
            borderColor: hovered ? "#ffffff" : borderColor,
            backgroundColor: hovered ? borderColor : "transparent",
          }}
        >
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
};

const MainContent2 = () => {
  const cardsData = [
    {
      imgSrc: "./groups_black_24dp (1) 1.svg",
      title: "People",
      content:
        "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.",
      altText: "Illustration of people",
      buttonText: "Connect",
      borderColor: "#8064A2",
    },
    {
      imgSrc: "./location_on_black_24dp 1.svg",
      title: "Place",
      content:
        "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
      altText: "Illustration of a place",
      buttonText: "Meet up",
      borderColor: "#77933C",
    },
    {
      imgSrc: "./shopping_basket_black_24dp (2) 1.svg",
      title: "Product",
      content:
        "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
      altText: "Illustration of a product",
      buttonText: "Get it",
      borderColor: "#C0504D",
    },
    {
      imgSrc: "./event_available_black_24dp 2.svg",
      title: "Program",
      content:
        "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
      altText: "Illustration of a program",
      buttonText: "Attend",
      borderColor: "#0096C8",
    },
  ];

  return (
    <section className="bg-white py-5">
      <Container>
        <Row>
          {cardsData.map((data, index) => (
            <Col key={index} md={6}>
              <InfoCard
                imgSrc={data.imgSrc}
                title={data.title}
                content={data.content}
                altText={data.altText}
                buttonText={data.buttonText}
                borderColor={data.borderColor}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MainContent2;
