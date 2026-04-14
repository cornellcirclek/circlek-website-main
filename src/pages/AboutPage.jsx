import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

const AboutPage = () => {
  const CKIBlue = "rgb(0, 47, 95)";
  const [groupPhotos, setGroupPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Custom CSS for the fixed-size carousel
  const carouselWrapperStyle = {
    height: "400px",
    borderRadius: "0.25rem",
    overflow: "hidden",
    boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)"
  };
  
  // Custom CSS for the carousel items to ensure consistent height
  const carouselItemStyle = {
    height: "400px",
    backgroundColor: "#f8f9fa" // Light background in case of loading
  };
  
  // CSS for the images to ensure they fill and crop
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  };

  useEffect(() => {
    const importAll = (r) => {
      return r.keys().map(r);
    };

    try {
      // Make sure this path is correct
      const images = importAll(require.context('../assets/group', false, /\.(png|jpe?g|svg)$/));
      setGroupPhotos(images);
    } catch (error) {
      console.error("Error loading images:", error);
      // Provide a fallback image path that you're sure exists
      setGroupPhotos([require('../assets/group/group-photo.png')]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">About Cornell Circle K</h1>
      
      <Row className="mb-5 align-items-center">
        <Col lg={6} className="mb-4 mb-lg-0">
          <div style={carouselWrapperStyle}>
            {isLoading ? (
              <div className="d-flex align-items-center justify-content-center" style={carouselItemStyle}>
                <span>Loading images...</span>
              </div>
            ) : groupPhotos.length > 1 ? (
              <Carousel indicators={true} interval={5000} controls={true}>
                {groupPhotos.map((photo, index) => (
                  <Carousel.Item key={index} style={carouselItemStyle}>
                    <img
                      className="d-block"
                      style={imageStyle}
                      src={photo}
                      alt={`Cornell Circle K group photo ${index + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : (
              <div style={carouselItemStyle}>
                <img 
                  className="d-block"
                  style={imageStyle}
                  src={groupPhotos[0] || require('../assets/group/group-photo.png')} 
                  alt="Cornell Circle K members"
                />
              </div>
            )}
          </div>
        </Col>
        <Col lg={6}>
          <h2 className="mb-3">Who We Are</h2>
          <p>
            Cornell Circle K is a collegiate service organization that is part of Circle K International, 
            the world's largest student-led collegiate service organization. We are sponsored by the Kiwanis 
            Club of Ithaca and are dedicated to the tenets of service, leadership, and fellowship.
          </p>
          <p>
            Our club brings together students from all colleges at Cornell University who share a passion for 
            community service and personal growth. Through our diverse service projects, leadership opportunities, 
            and social events, we strive to make a positive impact on our campus, in the Ithaca community, and beyond.
          </p>
        </Col>
      </Row>
      
      <div className="my-5 py-4 px-4 rounded" style={{ backgroundColor: '#f8f9fa' }}>
        <h2 className="text-center mb-4">Our EBoard</h2>
        <p className="lead text-center mb-0">
          Circle K would not run properly without the dedication and hard work of our executive board. 
          Our EBoard is responsible for planning and executing all of our events, managing our club operations, 
          and fostering a positive and inclusive community for our members. We are grateful for their leadership 
          and commitment to our club's mission!
        </p>
      </div>



      <div className="my-5 py-4 px-4 rounded" style={{ backgroundColor: '#f8f9fa' }}>
        <h2 className="text-center mb-4">Our Mission</h2>
        <p className="lead text-center mb-0">
          Circle K International develops college and university students into a global network of responsible 
          citizens and leaders with a lifelong commitment to service. At Cornell, we fulfill this mission by 
          organizing regular service projects, fostering leadership development, and creating a supportive 
          community for our members.
        </p>
      </div>
      
      <h2 className="text-center mb-4">Our Impact</h2>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Header className="text-white" style={{ backgroundColor: CKIBlue }}>
              <h3 className="h5 mb-0">Service Areas</h3>
            </Card.Header>
            <Card.Body>
              <ul className="mb-0">
                <li>Local community support for underserved populations</li>
                <li>Environmental conservation and sustainability</li>
                <li>Educational outreach and mentorship</li>
                <li>Health and wellness initiatives</li>
                <li>Support for children and seniors</li>
                <li>Disaster relief and humanitarian aid</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Header className="text-white" style={{ backgroundColor: CKIBlue }}>
              <h3 className="h5 mb-0">Leadership Development</h3>
            </Card.Header>
            <Card.Body>
              <ul className="mb-0">
                <li>Officer positions and committee roles</li>
                <li>Project planning and management</li>
                <li>Public speaking and communication skills</li>
                <li>Team-building and collaboration</li>
                <li>District and international conventions</li>
                <li>Professional networking opportunities</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <div className="mt-5">
        <h2 className="mb-4">Join Us</h2>
        <p>
          Membership in Cornell Circle K is open to all undergraduate and graduate students at Cornell University. 
          We welcome students from all backgrounds and fields of study who share our commitment to service and 
          personal growth.
        </p>
        <p>
          To become a member, attend one of our general body meetings or service events, and speak with an 
          officer about official membership! We look forward to welcoming you to our Circle K family!
        </p>
        <p className="mb-0">
          <strong>When:</strong> Every Other Monday, 6:30 PM - 7:30 PM<br />
          <strong>Where:</strong> Stimson Hall G01
        </p>
      </div>
    </Container>
  );
};

export default AboutPage;