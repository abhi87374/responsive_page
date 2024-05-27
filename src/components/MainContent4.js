import React from "react";
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MainContent4() {
  return (
    <section className="d-flex justify-content-center align-items-center bg-white py-5">
      <Container className="bg-light rounded p-4" style={{ maxWidth: '1240px' }}>
        <header className="d-flex align-items-center gap-3 mb-4">
          <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/94b9dbb4ba9a164c90211eeb1734d51bff611fc7b799a52453756defa0b7bd33?apiKey=a9b31426ea8c42508c8d83a25324d8b5&" alt="MainContent4 Logo" style={{ width: '40px', height: '40px' }} />
          <h2 className="m-0" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Testimonials</h2>
        </header>
        <p style={{ color: '#6d747a', letterSpacing: '0.36px', font: '300 18px/30px Poppins, sans-serif' }}>
          In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people... To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
        </p>
        <Row className="mt-4">
          <Col md={8}>
            <Card className="text-light p-4 mb-4" style={{ backgroundColor: '#CCC1DA' }} >
              <Row className="d-flex align-items-center">
                <Col xs="auto" className="d-flex align-items-center gap-3">
                  <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c93afa7e02186b225fe9b4fdbd15c4b42422342ad443a38fe54f9b3bc396ef1?apiKey=a9b31426ea8c42508c8d83a25324d8b5&" alt="Author Avatar" roundedCircle style={{ width: '40px', height: '40px' }} />
                  <div style={{ width: '12px', height: '12px', backgroundColor: '#8064a2', borderRadius: '50%' }}></div>
                </Col>
                <Col className="d-flex align-items-center">
                  <div className="flex-grow-1" style={{ borderTop: '1px solid white' }}></div>
                  <time style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', padding: '0 10px' }}>0:00</time>
                  <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/c78dedfa9fdc6a6d41ac953854c81965f14b938f012556e069244fe44c9a2a3c?apiKey=a9b31426ea8c42508c8d83a25324d8b5&" alt="Play Button" style={{ width: '72px', aspectRatio: '1.2', borderRadius: '50%' }} />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={4} className="d-flex flex-column align-items-center mt-4">
            <div className="d-flex align-items-center gap-3">
              <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/cae3697ba52a839eaf8e2363952e2e446e6cac6f3ca6bf000e4c9473bef58259?apiKey=a9b31426ea8c42508c8d83a25324d8b5&" alt="Author Bio Avatar" roundedCircle style={{ width: '100px' }} />
              <div>
                <h3 style={{ color: '#8064a2', font: '600 18px Poppins, sans-serif', margin: 0 }}>Shubha Nagarajan</h3>
                <p style={{ color: '#0096c8', font: '400 14px Poppins, sans-serif', marginTop: '10px' }}>Classical Dancer</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MainContent4;
