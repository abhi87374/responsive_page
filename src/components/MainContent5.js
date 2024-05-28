import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MainContent5() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <main className=" d-flex flex-column font-weight-bold p-4" style={{ backgroundColor: '#F7FDFF' }}>
      <Container className=" my-5">
        <Row>
          <Col>
            <h1 className="text-dark font-italic" style={{ fontSize: '36px', fontFamily: 'Poppins, sans-serif' }}>
              Your <span style={{ color: 'rgba(128, 100, 162, 1)' }}>Hobby</span>, Your
              <span style={{ color: 'rgba(0, 150, 200, 1)' }}> Community...</span>
            </h1>
            <Button className="mt-4 px-4 py-2" style={{ backgroundColor: '#8064a2', border: 'none', fontSize: '20px', fontFamily: 'Poppins, sans-serif' }}>
              Get Started
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md={10}>
            <img
              src="./MainContent5.svg"
              alt="Descriptive image text"
              className="img-fluid rounded"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </Col>
        </Row>
      </Container>
      {showTopBtn && (
        <Button
          onClick={goToTop}
          style={{
            position: 'fixed',
            bottom: '100px',
            right: '50px',
            color: 'black',
            fontWeight: '1000',
            backgroundColor: 'white',
            border: 'solid',
            borderColor: 'grey',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#8064a2'; // Purple color
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'white';
          }}
        >
          ^
        </Button>
      )}
    </main>
  );
}

export default MainContent5;
