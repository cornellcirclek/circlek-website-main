import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { upcomingEvents, getBadgeColor, isEventInPast } from "../data/eventData";
import { Calendar, Clock, MapPin, Cake, GhostIcon, Apple } from "lucide-react";

const EventsPage = () => {
  const CKIBlue = "rgb(0, 47, 95)";

  const iconStyle = {
    color: CKIBlue,
    size: 18,
    strokeWidth: 2,
    className: "me-2"
  };

  const largeIconStyle = {
    color: "white",
    size: 36,
    strokeWidth: 2
  };

  const pastEvents = upcomingEvents
    .filter(event => isEventInPast(event.date))
    .sort((a, b) => {
      const getEndDate = (dateStr) => {
        if (dateStr.includes("-")) {
          const parts = dateStr.split("-");
          const endDatePart = parts[1].trim();
          if (!endDatePart.match(/[a-zA-Z]/)) {
            const startDateParts = parts[0].trim().split(" ");
            const month = startDateParts[0];
            return new Date(`${month} ${endDatePart}`);
          } else {
            return new Date(endDatePart);
          }
        }
        return new Date(dateStr);
      };
      
      return getEndDate(b.date) - getEndDate(a.date);
    });
  
  const futureEvents = upcomingEvents
    .filter(event => !isEventInPast(event.date))
    .sort((a, b) => {
      const getStartDate = (dateStr) => {
        if (dateStr.includes("-")) {
          const parts = dateStr.split("-");
          return new Date(parts[0].trim());
        }
        return new Date(dateStr);
      };
      
      return getStartDate(a.date) - getStartDate(b.date);
    });

  const EventCard = ({ event }) => (
    <Card className="h-100 shadow-sm">
      <Card.Header className="bg-white border-bottom-0 pt-3 pb-0">
        <Badge bg={getBadgeColor(event.category)} className="mb-2">
          {event.category}
        </Badge>
        <Card.Title className="mb-0 mt-1">{event.title}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <div className="d-flex align-items-center mb-2">
            <Calendar {...iconStyle} />
            <span>{event.date}</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <Clock {...iconStyle} />
            <span>{event.time}</span>
          </div>
          <div className="d-flex align-items-center mb-3">
            <MapPin {...iconStyle} />
            <span>{event.location}</span>
          </div>
          <p className="mb-0">{event.description}</p>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="bg-white text-center border-top-0 pt-0 pb-3">
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
  );

  return (
    <Container className="py-5">
      <h1 className="text-center mb-2">Events & Service Opportunities</h1>
      <p className="text-center lead mb-5">
        Join us in making a difference in our community
      </p>

      {futureEvents.length > 0 && (
        <>
          <h2 className="mb-4">Upcoming Events</h2>
          <Row className="mb-5">
            {futureEvents.map((event, index) => (
              <Col key={index} lg={4} md={6} className="mb-4">
                <EventCard event={event} />
              </Col>
            ))}
          </Row>
        </>
      )}

      <h2 className="text-center mb-4">Signature Annual Events</h2>
      <Row className="mb-5">
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm text-center">
            <Card.Body>
              <div
                className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: CKIBlue,
                }}
              >
                <Cake {...largeIconStyle} />
              </div>
              <Card.Title>Sophie Fund</Card.Title>
              <Card.Text>
                The annual cupcake contest raising funds for the Ithaca Free Mental Health Clinic.
                Come taste test and vote for the winner!
              </Card.Text>
              <div className="small text-muted">October 2025</div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm text-center">
          <Card.Body>
              <div
                className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: CKIBlue,
                }}
              >
                <Apple {...largeIconStyle} />
              </div>
              <Card.Title>Apple Fest</Card.Title>
              <Card.Text>
                Come help table for Apple Fest. Help out booths to support local merchants.
              </Card.Text>
              <div className="small text-muted">September 2025</div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};


      {pastEvents.length > 0 && (
        <>
          <h2 className="mb-4">Past Events</h2>
          <Row className="mb-5">
            {pastEvents.map((event, index) => (
              <Col key={index} lg={4} md={6} className="mb-4">
                <EventCard event={event} />
              </Col>
            ))}
          </Row>
        </>
      )}

      <div
        className="my-5 p-4 rounded text-center"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <h2 className="mb-3">General Body Meetings</h2>
        <p className="mb-4">
          We hold weekly General Body Meetings where we discuss upcoming service
          opportunities, share announcements, and enjoy fellowship + service
          activities. These meetings are open to all Cornell students, whether
          you're a member or just interested in learning more about Circle K.
        </p>
        <div className="fw-bold">
          <p className="mb-1">Every Other Monday, 6:30 PM - 7:30 PM</p>
          <p className="mb-0">Stimson Hall, G01</p>
        </div>
      </div>



export default EventsPage;