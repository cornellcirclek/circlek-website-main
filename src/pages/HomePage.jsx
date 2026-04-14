import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { upcomingEvents } from "../data/eventData";
import nycki from "../assets/DCON-NYCKI.png";
import { Calendar, Clock, MapPin } from "lucide-react";

const HomePage = () => {
  const CKIBlue = "rgb(0, 47, 95)";
  
  const stats = [
    { value: 26, label: "Members" },
    { value: 173, label: "Past Events" },
    { value: 1000, label: "Service Hours", plus: true },
    { value: 11, label: "Officers" }
  ];
  
  const [countValues, setCountValues] = useState(stats.map(() => 0));
  
  const animationRun = useRef(false);
  
  const animationDuration = 1000; 
  const frameDuration = 16;
  const totalFrames = Math.round(animationDuration / frameDuration);
  
  useEffect(() => {
    const handleAnimation = () => {
      if (animationRun.current) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            animationRun.current = true;
            startCountAnimation();
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        observer.observe(statsSection);
      }
    };
    
    setTimeout(handleAnimation, 100);
    
    return () => {
      // Cleanup
    };
  }, []);
  
  const startCountAnimation = () => {
    let frame = 0;
    
    const counter = setInterval(() => {
      const progress = frame / totalFrames;
      const easingValue = calculateEasing(progress);
      
      const newCountValues = stats.map((stat, index) => {
        const value = Math.min(Math.round(stat.value * easingValue), stat.value);
        return value;
      });
      
      setCountValues(newCountValues);
      frame++;
      
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  };
  
  const calculateEasing = (progress) => {
    if (progress < 0.7) {
      return 0.9 * (1 - Math.pow(1 - progress / 0.7, 2));
    } else if (progress < 0.8) {
      return 0.9 + 0.15 * (progress - 0.7) / 0.1;
    } else if (progress < 0.9) {
      return 1.05 - 0.05 * (progress - 0.8) / 0.1;
    } else {
      return 1;
    }
  };

  const iconStyle = {
    color: CKIBlue,
    size: 18,
    strokeWidth: 2,
    className: "me-2"
  };

  return (
    <>
      <div
        className="py-5 text-white text-center position-relative"
        style={{
          backgroundImage: `url(${nycki})`,
          backgroundColor: CKIBlue,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* This is the contrast overlay div */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 47, 95, 0.47)",
            zIndex: 1,
          }}
        ></div>

        <Container className="py-5 position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold mb-3">
            Service. Leadership. Fellowship.
          </h1>
          <p className="lead fs-4 mb-4">
            Empowering Cornell students to serve and lead in their communities.
          </p>
          <div>
            <Link to="/about" className="btn btn-light btn-lg me-3">
              Learn More
            </Link>
            <a
              href="https://cornell.campusgroups.com/CUCKI/club_signup"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg"
            >
              Join Us Today
            </a>
          </div>
        </Container>
      </div>

      <Container className="py-5">
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <h2 className="mb-3">Welcome to Cornell Circle K!</h2>
            <p className="lead">
              We are Cornell University's chapter of Circle K International, the
              world's largest collegiate service organization. Through our
              values of service, leadership, and fellowship, we strive to make a
              positive impact on our campus and in our community.
            </p>
          </Col>
        </Row>

        {/* Club Stats with Animation */}
        <Row id="stats-section" className="text-center mb-5">
          {stats.map((stat, index) => (
            <Col key={index} md={3} sm={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <h3 
                    className="display-4 fw-bold" 
                    style={{ 
                      color: CKIBlue,
                      transition: "transform 0.2s ease",
                      transform: countValues[index] === stat.value ? "scale(1.05)" : "scale(1)"
                    }}
                  >
                    {countValues[index]}{stat.plus ? "+" : ""}
                  </h3>
                  <p className="mb-0">{stat.label}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Upcoming Events */}
        <h2 className="text-center mb-4">Upcoming Events</h2>
        <Row>
          {upcomingEvents.slice(0, 3).map((event, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="fw-bold">{event.title}</Card.Title>
                  <Card.Text>
                    <div className="d-flex align-items-center mb-2">
                      <Calendar {...iconStyle} />
                      <span>{event.date}</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <Clock {...iconStyle} />
                      <span>{event.time}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <MapPin {...iconStyle} />
                      <span>{event.location}</span>
                    </div>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border-0 text-center">
                  <Button
                    variant="outline-danger"
                    className="w-100"
                    style={{
                      borderColor: CKIBlue,
                      color: CKIBlue,
                      transition: "color 0.3s ease, background-color 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.backgroundColor = CKIBlue;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = CKIBlue;
                      e.currentTarget.style.backgroundColor = "white";
                    }}
                    onClick={() => window.open(event.link || "#", "_blank")}
                  >
                    Sign Up
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Link
            to="/events"
            className="btn btn-danger"
            style={{ backgroundColor: CKIBlue }}
          >
            View All Events
          </Link>
        </div>
      </Container>

      {/* CTA Section */}
      <div
        className="py-5 text-white text-center mt-5"
        style={{ backgroundColor: CKIBlue }}
      >
        <Container>
          <h2 className="mb-3">Ready to Make a Difference?</h2>
          <p className="lead mb-4">
            Join Cornell Circle K today and be part of something greater.
          </p>
          <a
            href="https://cornell.campusgroups.com/CUCKI/club_signup"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light btn-lg"
          >
            Become a Member
          </a>
        </Container>
      </div>
    </>
  );
};

export default HomePage;