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
      
      <div className="my-5 py-4 px-4 rounded" style={{ backgroundColor: 'white', color: "black" }}>
        <h2 className="text-center mb-4">Our EBoard</h2>
        <p className="lead text-center mb-0">
          Circle K would not run properly without the dedication and hard work of our executive board. 
          Our EBoard is responsible for planning and executing all of our events, managing our club operations, 
          and fostering a positive and inclusive community for our members. We are grateful for their leadership 
          and commitment to our club's mission!
        </p>
      </div>

      <Row className="align-items-center mb-5" style={{ backgroundColor: "white", color: "black", }}>
        <Col md={4} className="text-center mb-4 mb-md-0">
          <img
            src={require('../assets/eboard/Calyssa Headshot.png')}
            alt="Calyssa headshot"
            className="img-fluid rounded"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </Col>
        <Col md={8}>
          <h3 className="mb-3">Calyssa Orellana</h3>
          <p>Calyssa is the President of Cornell Circle K!</p>
          <p>Class of 2028</p>
          <p>Major: Chemistry</p>
          <p>Hometown: Maryland</p>
          <p>Fun Fact: Calyssa has over 40 house plants!</p>
        </Col>
      </Row>

<Row className="align-items-center mb-5 justify-content-center" style={{ backgroundColor: 'white', color: "black" }}>
  {/* 1. The Text Column (Narrowed and Right-Aligned) */}
  <Col md={8} className="text-md-end pe-md-4">
    <h3 className="mb-3">Christopher Do</h3>
    <p>Chris is the Vice President of Cornell Circle K!</p>
    <p>Class of 2029</p>
    <p>Major: Chemical Engineering</p>
    <p>Hometown: Grand Prairie, Texas</p>
    <p>Fun Fact: Chris used to compete in a calculator speed competition in high school!</p>
  </Col>

  <Col md={4} className="text-center mb-4 mb-md-0">
    <img
      src={require('../assets/eboard/Chris Headshot.png')}
      alt="Chris headshot"
      className="img-fluid rounded"
      style={{ maxHeight: '400px', objectFit: 'cover' }}
    />
  </Col>
</Row>

      <Row className="align-items-center mb-5" style={{ backgroundColor: 'white', color: "black" }}>
        <Col md={4} className="text-center mb-4 mb-md-0">
          <img
            src={require('../assets/eboard/Matthew Headshot.png')}
            alt="Matthew headshot"
            className="img-fluid rounded"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </Col>
        <Col md={8}>
          <h3 className="mb-3">Matthewjordan Rueda</h3>
          <p>Matthew is the Treasurer of Cornell Circle K!</p>
          <p>Class of 2027</p>
          <p>Major: Animal Science</p>
          <p>Hometown: Miami, Florida</p>
          <p>Fun Fact: Matthew works as a veterinary technician back home!</p>
        </Col>
      </Row>

<Row className="align-items-center mb-5 justify-content-center" style={{ backgroundColor: 'white', color: "black" }}>
  {/* 1. The Text Column (Narrowed and Right-Aligned) */}
  <Col md={8} className="text-md-end pe-md-4">
    <h3 className="mb-3">Emely Nuñez Lemus</h3>
    <p>Emely is the Secretary of Cornell Circle K!</p>
    <p>Class of 2028</p>
    <p>Major: Global and Public Health Sciences</p>
    <p>Hometown: San Diego, California</p>
    <p>Fun Fact: Emely used to be a theatre kid!</p>
  </Col>
  {/* 2. The Image Column */}
  <Col md={4} className="text-center mb-4 mb-md-0">
    <img
      src={require('../assets/eboard/Emely Headshot.png')}
      alt="Emely headshot"
      className="img-fluid rounded"
      style={{ maxHeight: '400px', objectFit: 'cover' }}
    />
  </Col>
  </Row>

        <Row className="align-items-center mb-5" style={{ backgroundColor: 'white', color: "black" }}>
        <Col md={4} className="text-center mb-4 mb-md-0">
          <img
            src={require('../assets/eboard/Kyle Headshot.png')}
            alt="Kyle headshot"
            className="img-fluid rounded"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </Col>
        <Col md={8}>
          <h3 className="mb-3">Kyle Humphries</h3>
          <p>Kyle is the Editor of Cornell Circle K!</p>
          <p>Class of 2029</p>
          <p>Major: Chemical Engineering</p>
          <p>Hometown: Sidney, Montana</p>
          <p>Fun Fact: Kyle loves to play the guitar!</p>
        </Col>
      </Row>

      <Row className="align-items-center mb-5 justify-content-center" style={{ backgroundColor: 'white', color: "black" }}>
  {/* 1. The Text Column (Narrowed and Right-Aligned) */}
  <Col md={8} className="text-md-end pe-md-4">
    <h3 className="mb-3">Ella Zilli</h3>
    <p>Ella is the Service Chair of Cornell Circle K!</p>
    <p>Class of 2027</p>
    <p>Major: Global and Public Health Sciences</p>
    <p>Hometown: Astoria, Oregon</p>
    <p>Fun Fact: Ella is running in the Boston Marathon!</p>
  </Col>
  {/* 2. The Image Column */}
  <Col md={4} className="text-center mb-4 mb-md-0">
    <img
      src={require('../assets/eboard/Ella Headshot.png')}
      alt="Ella headshot"
      className="img-fluid rounded"
      style={{ maxHeight: '400px', objectFit: 'cover' }}
    />
  </Col>
</Row>

        <Row className="align-items-center mb-5" style={{ backgroundColor: 'white', color: "black" }}>
        <Col md={4} className="text-center mb-4 mb-md-0">
          <img
            src={require('../assets/eboard/Katie Headshot.png')}
            alt="Katie headshot"
            className="img-fluid rounded"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </Col>
        <Col md={8}>
          <h3 className="mb-3">Katie Specht</h3>
          <p>Katie is the Fellowship Chair of Cornell Circle K!</p>
          <p>Class of 2029</p>
          <p>Major: Food Science</p>
          <p>Hometown: East Setauket, New York</p>
          <p>Fun Fact: Katie is interested in ASL and Deaf Studies!</p>
        </Col>
      </Row>

      <Row className="align-items-center mb-5 justify-content-center" style={{ backgroundColor: 'white', color: "black" }}>
  {/* 1. The Text Column (Narrowed and Right-Aligned) */}
  <Col md={8} className="text-md-end pe-md-4">
    <h3 className="mb-3">Ash Puri</h3>
    <p>Ash is the Fundraising Chair of Cornell Circle K!</p>
    <p>Class of 2028</p>
    <p>Major: Mechanical Engineering</p>
    <p>Hometown: South Jordan, Utah</p>
    <p>Fun Fact: Ash is getting pretty good at making cake pops!</p>
  </Col>
  {/* 2. The Image Column */}
  <Col md={4} className="text-center mb-4 mb-md-0">
    <img
      src={require('../assets/eboard/Ash Headshot.png')}
      alt="Ash headshot"
      className="img-fluid rounded"
      style={{ maxHeight: '400px', objectFit: 'cover' }}
    />
  </Col>
</Row>

        <Row className="align-items-center mb-5" style={{ backgroundColor: 'white', color: "black" }}>
        <Col md={4} className="text-center mb-4 mb-md-0">
          <img
            src={require('../assets/eboard/Kalia Headshot.png')}
            alt="Kalia headshot"
            className="img-fluid rounded"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </Col>
        <Col md={8}>
          <h3 className="mb-3">Kalia Cheung</h3>
          <p>Kalia is the Marketing Chair of Cornell Circle K!</p>
          <p>Class of 2028</p>
          <p>Major: Psychology</p>
          <p>Hometown: Montville, New Jersey</p>
          <p>Fun Fact: Kalia collects smiskis!</p>
        </Col>
      </Row>

      <Row className="align-items-center mb-5 justify-content-center" style={{ backgroundColor: 'White', color: "Black" }}>
  {/* 1. The Text Column (Narrowed and Right-Aligned) */}
  <Col md={8} className="text-md-end pe-md-4">
    <h3 className="mb-3">Rena Weintraub</h3>
    <p>Rena is the Recruitment Chair of Cornell Circle K!</p>
    <p>Class of 2027</p>
    <p>Major: Nutritional Science</p>
    <p>Hometown: Albuquerque, New Mexico</p>
    <p>Fun Fact: Rena has nerve damage in her knee!</p>
  </Col>
  {/* 2. The Image Column */}
  <Col md={4} className="text-center mb-4 mb-md-0">
    <img
      src={require('../assets/eboard/Rena Headshot.png')}
      alt="Rena headshot"
      className="img-fluid rounded"
      style={{ maxHeight: '400px', objectFit: 'cover' }}
    />
  </Col>
</Row>

        {/* Join Us */}
      <div className="text-center mb-5" style={{ backgroundColor: CKIBlue, color: "white" }}>
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