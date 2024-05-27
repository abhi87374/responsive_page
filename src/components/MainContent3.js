import * as React from "react";
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MainContent3() {
  return (
    <Container className="my-4" style={{ borderRadius: '8px', border: '1px solid rgba(206, 212, 218, 1)', backgroundColor: 'var(--Grey-white, #fff)', padding: '40px', maxWidth: '1240px' }}>
      <Row>
        <Col xs={12} md={8} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d4071530252e3616f4333e0ccb5fa3633b42ccb60b58a5cf5688d0651e9baf3?apiKey=a9b31426ea8c42508c8d83a25324d8b5&" alt="Description" fluid style={{ aspectRatio: '1', objectFit: 'cover', objectPosition: 'center', width: '40px' }} />
          <h2 style={{ fontFamily: 'Poppins, sans-serif', margin: 'auto 0' }}>Add your own</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={12}>
          <p style={{ letterSpacing: '0.36px', fontSize: '18px', lineHeight: '30px', fontFamily: 'Poppins, sans-serif' }}>
            Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={12}>
          <Button variant="outline-primary" style={{ borderRadius: '8px', border: '1px solid rgba(128, 100, 162, 1)', color: 'var(--Purple-1, #8064a2)', padding: '12px 29px', fontFamily: 'Poppins, sans-serif', cursor: 'pointer' }}>
            Add new
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default MainContent3;
