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
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b85bd8c46aec3f0df5360a3ac5b11cfd5620eb5e636b4e05ed2552981b070ade?apiKey=a9b31426ea8c42508c8d83a25324d8b5&",
      title: "People",
      content:
        "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.",
      altText: "Illustration of people",
      buttonText: "Connect",
      borderColor: "#8064A2",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc89cc685b9666d001c5f09b2056f27c6fee855bdff77394731a3e83085aabfd?apiKey=a9b31426ea8c42508c8d83a25324d8b5&",
      title: "Place",
      content:
        "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
      altText: "Illustration of a place",
      buttonText: "Meet up",
      borderColor: "#77933C",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9b97ad17208e60422f990990f52ee9c239f58c82e61f57948997807fdc6a580?apiKey=a9b31426ea8c42508c8d83a25324d8b5&",
      title: "Product",
      content:
        "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
      altText: "Illustration of a product",
      buttonText: "Get it",
      borderColor: "#C0504D",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ccf8604f8f582f375b1c8e2b1cd4897b4053fee9a567cf2b09bb7f979b4a4e1e?apiKey=a9b31426ea8c42508c8d83a25324d8b5&",
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
