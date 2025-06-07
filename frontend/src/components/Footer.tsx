import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => (
  <footer className="py-4" style={{ background: '#f5f3fd' }}>
    <Container>
      <Row>
        <Col className="text-center">
          {/* Footer intentionally left minimal */}
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer; 