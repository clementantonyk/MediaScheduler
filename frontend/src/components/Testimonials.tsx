import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const testimonials = [
  {
    name: 'Jane Doe',
    company: 'Acme Corp',
    text: 'ConsultSphere helped us transform our business strategy and achieve record growth. Highly recommended!'
  },
  {
    name: 'John Smith',
    company: 'Beta Solutions',
    text: 'Professional, insightful, and results-driven. The team delivered beyond our expectations.'
  },
  {
    name: 'Emily Chen',
    company: 'Gamma Tech',
    text: 'Their expertise in process optimization saved us time and money. Fantastic experience!'
  }
];

const Testimonials: React.FC = () => (
  <section id="testimonials" className="py-5" style={{ background: '#f3f0fa' }}>
    <Container>
      <h2 className="section-title text-center mb-5">What Our Clients Say</h2>
      <Row className="g-4 justify-content-center">
        {testimonials.map((t, i) => (
          <Col md={4} key={i}>
            <Card className="card-elegant p-4 h-100 fade-in">
              <Card.Text className="fs-5 mb-3">“{t.text}”</Card.Text>
              <Card.Subtitle className="fw-bold">{t.name}</Card.Subtitle>
              <Card.Text className="text-secondary">{t.company}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Testimonials; 