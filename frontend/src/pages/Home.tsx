import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faShareAlt, faChartLine, faUsers } from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    icon: faCalendarAlt,
    title: 'Smart Scheduling',
    description: 'Plan and schedule your posts across multiple platforms with our intuitive calendar interface.'
  },
  {
    icon: faShareAlt,
    title: 'Multi-Platform',
    description: 'Connect and manage all your social media accounts in one place.'
  },
  {
    icon: faChartLine,
    title: 'Analytics',
    description: 'Track your post performance and engagement across all platforms.'
  },
  {
    icon: faUsers,
    title: 'Team Collaboration',
    description: 'Collaborate with your team to manage content and schedules together.'
  }
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="lavendel-home">
      {/* Hero Section */}
      <section className="lavendel-hero d-flex align-items-center justify-content-center">
        <Container className="position-relative z-2">
          <Row className="justify-content-center align-items-center min-vh-70">
            <Col md={10} lg={8} className="text-center">
              <h1 className="display-1 fw-bold mb-4 lavendel-gradient-text">SocialSphere</h1>
              <p className="lead mb-5 fs-3 text-secondary">
                Transform your social media workflow. Plan, schedule, and analyze your content with a beautiful, intuitive dashboard.
              </p>
              <div className="d-flex justify-content-center gap-4 mb-4 flex-wrap">
                <Button variant="lavendel-primary" size="lg" className="px-5 py-2 rounded-pill shadow" onClick={() => navigate('/register')}>
                  Get Started
                </Button>
                <Button variant="outline-lavendel" size="lg" className="px-5 py-2 rounded-pill shadow" onClick={() => navigate('/login')}>
                  Login
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="lavendel-features py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5 display-5 lavendel-section-title">Key Features</h2>
          <Row className="g-4 justify-content-center">
            {features.map((feature, idx) => (
              <Col xs={12} sm={6} lg={3} key={idx} className="d-flex align-items-stretch">
                <Card className="lavendel-feature-card text-center w-100 p-4 border-0">
                  <div className="lavendel-icon mb-3 mx-auto">
                    <FontAwesomeIcon icon={feature.icon} size="2x" />
                  </div>
                  <Card.Title className="fw-bold mb-2 fs-4">{feature.title}</Card.Title>
                  <Card.Text className="text-secondary fs-6">{feature.description}</Card.Text>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home; 