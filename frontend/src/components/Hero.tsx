import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Hero: React.FC = () => (
  <section className="py-5" style={{
    background: 'linear-gradient(120deg, #ede7f6 0%, #fff 100%)',
    minHeight: '60vh'
  }}>
    <Container className="text-center fade-in">
      <h1 className="display-3 fw-bold mb-3 brand">Transform Your Business</h1>
      <p className="lead mb-4 fs-4 text-secondary">
        We deliver innovative consulting solutions to help you grow, optimize, and lead in your industry.
      </p>
      <Button className="btn-elegant px-5 py-2" size="lg">Get Started</Button>
    </Container>
  </section>
);

export default Hero; 