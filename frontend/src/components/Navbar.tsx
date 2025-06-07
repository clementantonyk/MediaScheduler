import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <nav className="lavendel-navbar navbar navbar-expand-lg navbar-light bg-white shadow-sm rounded-4 py-2 px-3 sticky-top mb-4">
      <Container fluid>
        <Link to="/" className="navbar-brand lavendel-brand fs-3 fw-bold">
          <span className="lavendel-gradient-text">SocialSphere</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link as={Link} to="/" className="lavendel-nav-link">Home</Nav.Link>
            {user ? (
              <>
                <Nav.Link as={Link} to="/dashboard" className="lavendel-nav-link">Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/planner" className="lavendel-nav-link">Planner</Nav.Link>
                <Nav.Link as={Link} to="/profile" className="lavendel-nav-link">Profile</Nav.Link>
                <Button variant="outline-lavendel" className="ms-2 rounded-pill px-4" onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" className="lavendel-nav-link">Login</Nav.Link>
                <Button variant="lavendel-primary" className="ms-2 rounded-pill px-4" onClick={() => navigate('/register')}>Get Started</Button>
              </>
            )}
          </Nav>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar; 