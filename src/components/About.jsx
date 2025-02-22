import React, { useEffect, useState } from 'react'
import styles from './About.module.css'
import Carousel from 'react-bootstrap/Carousel';
import { Card, Container, Row, Col, Spinner } from "react-bootstrap";
import axios from 'axios';
const About = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const membersImages = [
    "https://img.freepik.com/premium-vector/portrait-business-woman_505024-2803.jpg?w=900",
    "https://img.freepik.com/premium-vector/businessman-man-jacket-red-tie_101087-1353.jpg?w=900",
    "https://img.freepik.com/premium-vector/middle-age-man-portrait-face_684058-2447.jpg?w=900",
    "https://img.freepik.com/premium-vector/portrait-business-woman_505024-2805.jpg?w=900"
  ]
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const updatedData = data.map((member, index) => ({
          ...member,
          role: "Executive Member",
          image: membersImages[index % membersImages.length],
        }));
        setMembers(updatedData.slice(0, 4));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container py-5">
      <div className="row align-items-center text-center text-md-start">
        <div className="col-md-6">
          <h2 className="fw-bold text-primary">Empowering Your Business</h2>
          <p className="lead text-muted">
            We provide cutting-edge solutions to help you scale, innovate, and stay ahead of the competition.
          </p>
          <button className="btn btn-primary mt-3">Learn More</button>
        </div>
        <div className="col-md-6">
          <img src="./aboutus.avif" alt="Business" className="img-fluid rounded shadow" />
        </div>
      </div>
      <div>
        <h3 className={styles.aboutUsHeading}>Meet Our team</h3>
        {/* // use default images here */}
        {/* make an array of local images and map throgh it */}
        <Container className="py-5">
          <h2 className="text-center mb-4">Board Members</h2>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : (
            <Row className="justify-content-center">
              {members.map((member) => (
                <Col md={6} sm={6} key={member.id} className="mb-4">
                  <Card className="shadow-lg border-0">
                    <Card.Img variant="top" src={member.image}  className="rounded" style={{width: "100%",height: '150px',objectFit:'contain',borderRadius:'8px' }}/>
                    <Card.Body>
                      <Card.Title className="fw-bold">{member.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                      <Card.Text>
                        <strong>Email:</strong> {member.email} <br />
                        <strong>Phone:</strong> {member.phone} <br />
                        <strong>Website:</strong>{" "}
                        <a href={`https://${member.website}`} target="_blank" rel="noopener noreferrer">
                          {member.website}
                        </a>
                        <br />
                        <strong>Address:</strong> {member.address.street}, {member.address.city}, {member.address.zipcode}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </div>
    </div>

  )
}

export default About