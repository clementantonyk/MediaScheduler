import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About: React.FC = () => (
  <section id="about" className="py-5 bg-white">
    <Container>
      <Row className="align-items-center">
        <Col md={6} className="mb-4 mb-md-0">
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="About us"
            fluid
            rounded
            className="shadow fade-in"
          />
        </Col>
        <Col md={6}>
          <h2 className="section-title mb-4">About Us</h2>
          <p className="fs-5 text-secondary">
            We are a team of passionate consultants dedicated to helping businesses unlock their full potential. With years of experience across industries, we bring expertise, creativity, and a client-first approach to every project.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About; 