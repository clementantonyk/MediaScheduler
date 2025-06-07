import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faLock,
  faBell,
  faPalette,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

const Profile: React.FC = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    postReminders: true,
    weeklyDigest: false,
  });

  const [theme, setTheme] = useState('light');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    return () => {
      document.body.removeAttribute('data-theme');
    };
  }, [theme]);

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (user.newPassword !== user.confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    // TODO: Implement password change logic
    setSuccess('Password updated successfully');
    setUser({
      ...user,
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  const handleNotificationChange = (setting: keyof typeof notifications) => {
    setNotifications({
      ...notifications,
      [setting]: !notifications[setting],
    });
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <Container className="py-4 fade-in">
      <Row className="justify-content-center">
        <Col md={8} lg={7}>
          <Card className="mb-4 text-center p-4">
            <Card.Body>
              <div className="mb-3 d-flex flex-column align-items-center">
                <div className="avatar-placeholder mb-2">
                  <FontAwesomeIcon icon={faUser} size="3x" />
                </div>
                <h4 className="fw-bold mb-1">{user.name}</h4>
                <p className="text-muted mb-3">{user.email}</p>
                <Button variant="outline-danger" className="w-50 mx-auto mb-2">
                  <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
                  Logout
                </Button>
              </div>
            </Card.Body>
          </Card>

          <Card className="mb-4 text-center p-4">
            <Card.Header className="bg-transparent border-0 pb-0">
              <h5 className="mb-0 fw-bold">
                <FontAwesomeIcon icon={faUser} className="me-2" />
                Profile Information
              </h5>
            </Card.Header>
            <Card.Body>
              <Form className="mx-auto" style={{ maxWidth: 400 }}>
                <Form.Group className="mb-3 text-start">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                  />
                </Form.Group>

                <Form.Group className="mb-3 text-start">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                  />
                </Form.Group>

                <Button variant="primary" className="w-100">Update Profile</Button>
              </Form>
            </Card.Body>
          </Card>

          <Card className="mb-4 text-center p-4">
            <Card.Header className="bg-transparent border-0 pb-0">
              <h5 className="mb-0 fw-bold">
                <FontAwesomeIcon icon={faLock} className="me-2" />
                Change Password
              </h5>
            </Card.Header>
            <Card.Body>
              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">{success}</Alert>}

              <Form onSubmit={handlePasswordChange} className="mx-auto" style={{ maxWidth: 400 }}>
                <Form.Group className="mb-3 text-start">
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={user.currentPassword}
                    onChange={(e) =>
                      setUser({ ...user, currentPassword: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3 text-start">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={user.newPassword}
                    onChange={(e) =>
                      setUser({ ...user, newPassword: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3 text-start">
                  <Form.Label>Confirm New Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={user.confirmPassword}
                    onChange={(e) =>
                      setUser({ ...user, confirmPassword: e.target.value })
                    }
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Update Password
                </Button>
              </Form>
            </Card.Body>
          </Card>

          <Card className="mb-4 text-center p-4">
            <Card.Header className="bg-transparent border-0 pb-0">
              <h5 className="mb-0 fw-bold">
                <FontAwesomeIcon icon={faBell} className="me-2" />
                Notification Settings
              </h5>
            </Card.Header>
            <Card.Body>
              <Form className="mx-auto" style={{ maxWidth: 400 }}>
                <Form.Group className="mb-3 text-start">
                  <Form.Check
                    type="switch"
                    id="email-notifications"
                    label="Email Notifications"
                    checked={notifications.emailNotifications}
                    onChange={() => handleNotificationChange('emailNotifications')}
                  />
                </Form.Group>

                <Form.Group className="mb-3 text-start">
                  <Form.Check
                    type="switch"
                    id="post-reminders"
                    label="Post Reminders"
                    checked={notifications.postReminders}
                    onChange={() => handleNotificationChange('postReminders')}
                  />
                </Form.Group>

                <Form.Group className="mb-3 text-start">
                  <Form.Check
                    type="switch"
                    id="weekly-digest"
                    label="Weekly Digest"
                    checked={notifications.weeklyDigest}
                    onChange={() => handleNotificationChange('weeklyDigest')}
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>

          <Card className="mb-4 text-center p-4">
            <Card.Header className="bg-transparent border-0 pb-0">
              <h5 className="mb-0 fw-bold">
                <FontAwesomeIcon icon={faPalette} className="me-2" />
                Theme Settings
              </h5>
            </Card.Header>
            <Card.Body>
              <Form className="mx-auto" style={{ maxWidth: 400 }}>
                <Form.Group className="text-start">
                  <Form.Check
                    type="radio"
                    id="light-theme"
                    label="Light Theme"
                    checked={theme === 'light'}
                    onChange={() => handleThemeChange('light')}
                    className="mb-2"
                  />
                  <Form.Check
                    type="radio"
                    id="dark-theme"
                    label="Dark Theme"
                    checked={theme === 'dark'}
                    onChange={() => handleThemeChange('dark')}
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile; 