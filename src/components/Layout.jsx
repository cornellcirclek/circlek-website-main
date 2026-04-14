import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/circle-k-logo.png';
import { Instagram, Mail } from 'lucide-react';

const Layout = ({ children }) => {
  const CKIBlue = "rgb(0, 47, 95)";
  const currentYear = new Date().getFullYear();
  const location = useLocation(); 

  const socialIconStyle = {
    color: CKIBlue,
    size: 24,
    strokeWidth: 2
  };

  const socialIconContainerStyle = {
    display: 'inline-block',
    transition: 'transform 0.3s ease',
  };

  return (
    <>
      {/* Navigation */}
      <Navbar expand="lg" className="py-3 shadow-sm" bg="white">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top me-2"
              alt="Cornell Circle K Logo"
            />
            <div>
              <h1 className="h4 mb-0" style={{ color: CKIBlue }}>Circle K at Cornell</h1>
              <small className="text-muted">Service. Leadership. Fellowship.</small>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to="/"
                active={location.pathname === '/'}
                className="mx-2 fw-bold"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                active={location.pathname === '/about'}
                className="mx-2 fw-bold"
              >
                About Us
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/events"
                active={location.pathname === '/events'}
                className="mx-2 fw-bold"
              >
                Events
              </Nav.Link>
              <Nav.Link
                href="https://cornell.campusgroups.com/CUCKI/club_signup"
                target="_blank"
                className="ms-2 btn btn-danger text-white fw-bold"
                style={{ backgroundColor: CKIBlue }}
              >
                Join Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="py-4 bg-light mt-5">
        <Container>
          <Row className="align-items-center">
            <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
              <h5 style={{ color: CKIBlue }}>Cornell Circle K</h5>
              <p className="mb-0 small">Stimson Hall<br />Central Campus<br />Cornell University</p>
            </Col>
            <Col md={4} className="text-center mb-3 mb-md-0">
              <h5>Connect With Us</h5>
              <div className="d-flex justify-content-center">
                <a 
                  href="https://instagram.com/cornellcirclek" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mx-2"
                  aria-label="Instagram"
                  style={socialIconContainerStyle}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
                >
                  <Instagram {...socialIconStyle} />
                </a>
                <a 
                  href="mailto:cornellcirclek@gmail.com" 
                  className="mx-2"
                  aria-label="Email"
                  style={socialIconContainerStyle}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
                >
                  <Mail {...socialIconStyle} />
                </a>
                <a
                  href="https://linktr.ee/CornellCircleK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                  aria-label="Linktree"
                  style={socialIconContainerStyle}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
                >
                  <LinkTree {...socialIconStyle} />
                </a>
              </div>
            </Col>
            <Col md={4} className="text-center text-md-end">
              <div className="mb-2">
                <Link 
                  to="/" 
                  className="text-decoration-none text-dark me-3"
                  style={socialIconContainerStyle}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05) translateY(-1px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="text-decoration-none text-dark me-3"
                  style={socialIconContainerStyle}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05) translateY(-1px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
                >
                  About
                </Link>
                <Link 
                  to="/events" 
                  className="text-decoration-none text-dark"
                  style={socialIconContainerStyle}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05) translateY(-1px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
                >
                  Events
                </Link>
              </div>
              <p className="mb-0 small text-muted">© {currentYear} Cornell Circle K</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Layout;