import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faChartLine,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter as faTwitterBrand, faInstagram as faInstagramBrand, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const stats = [
  {
    label: 'Total Posts',
    value: 24,
    icon: faCalendarAlt,
  },
  {
    label: 'Engagement Rate',
    value: '4.2%',
    icon: faChartLine,
  },
  {
    label: 'Connected Accounts',
    value: 3,
    icon: faCalendarAlt,
  },
  {
    label: 'Scheduled Posts',
    value: 8,
    icon: faCalendarAlt,
  },
];

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  
  const recentPosts = [
    {
      id: 1,
      platform: 'Facebook',
      content: 'Exciting news about our latest product launch!',
      scheduledFor: '2024-03-20 10:00 AM',
      status: 'Scheduled',
    },
    {
      id: 2,
      platform: 'Twitter',
      content: 'Join us for our upcoming webinar on social media marketing.',
      scheduledFor: '2024-03-21 02:00 PM',
      status: 'Scheduled',
    },
    {
      id: 3,
      platform: 'Instagram',
      content: 'Check out our new collection of summer products!',
      scheduledFor: '2024-03-22 09:00 AM',
      status: 'Draft',
    },
  ];

  return (
    <Container className="py-5 fade-in">
      <div className="d-flex flex-column align-items-center mb-5">
        <h2 className="fw-bold section-title text-center mb-3">Dashboard</h2>
        <Button variant="primary" className="rounded-pill px-5 py-2 mb-2">+ New Post</Button>
      </div>
      <Row className="g-4 justify-content-center mb-5">
        {stats.map((stat, idx) => (
          <Col xs={12} sm={6} md={3} key={idx} className="d-flex justify-content-center">
            <Card className="dashboard-stat-card text-center shadow-sm h-100 w-100 p-3">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center py-4">
                <div className="dashboard-stat-icon mb-3">
                  <FontAwesomeIcon icon={stat.icon} size="2x" />
                </div>
                <h3 className="fw-bold mb-1 display-6">{stat.value}</h3>
                <div className="text-muted fs-5 mb-0">{stat.label}</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm p-4 mb-4 text-center">
            <Card.Title className="fw-bold mb-3 fs-4">Connected Accounts</Card.Title>
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-3">
              <Button variant="outline-primary" className="rounded-pill px-4">Facebook</Button>
              <Button variant="outline-primary" className="rounded-pill px-4">Twitter</Button>
              <Button variant="outline-primary" className="rounded-pill px-4">Instagram</Button>
              <Button variant="outline-primary" className="rounded-pill px-4">LinkedIn</Button>
            </div>
          </Card>
          <Card className="shadow-sm p-4 text-center">
            <Card.Title className="fw-bold mb-3 fs-4">Recent Posts</Card.Title>
            <Button variant="outline-primary" className="rounded-pill px-4 mb-3">View All</Button>
            <div className="text-muted">Exciting news about our latest product launch!<br/>Facebook • Scheduled for 2024-03-20 10:00 AM</div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard; 