import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
} from "mdb-react-ui-kit";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ClipLoader } from "react-spinners";
import { Button } from "react-bootstrap";

library.add(faFacebook, faTwitter, faLinkedin);

export default function ProfileStatistics() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    fetchUser(1);
  }, []);

  const fetchUser = (id) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error fetching user:", error));
  };

  const handleChangeUser = () => {
    const validUserId = Math.max(1, Math.min(10, userId));
    setUser(null);
    fetchUser(validUserId);
  };

  if (!user) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <ClipLoader color="#007bff" size={50} />
      </div>
    );
  }

  return (
    <div className="vh-100" style={{ backgroundColor: "#eee" }}>
      <h2 style={{ display: "flex", justifyContent: "center", paddingTop: "30px" }}>
        Your Profile Overview
      </h2>
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: "15px", position: "relative" }}>
              <div className="position-absolute top-0 end-0 m-2 d-flex align-items-center">
                <input
                  type="number"
                  value={userId}
                  className="form-control me-2"
                  placeholder="User ID"
                  min="1"
                  max="10"
                  style={{ width: "100px", textAlign: "center", fontSize: "14px" }}
                  onChange={(e) => {
                    const value = parseInt(e.target.value, 10) || 1;
                    setUserId(Math.max(1, Math.min(10, value)));
                  }}
                />
                <Button size="sm" onClick={handleChangeUser}>Change User</Button>
              </div>

              <MDBCardBody className="text-center mt-3">
                <div className="mt-3 mb-4">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle"
                    fluid
                    style={{ width: "100px" }}
                  />
                </div>

                <MDBTypography tag="h4">{user.name}</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  @{user.username} <span className="mx-2">|</span>
                  <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
                    {user.website}
                  </a>
                </MDBCardText>
                <MDBCardText>Email: {user.email}</MDBCardText>
                <MDBCardText>Phone: {user.phone}</MDBCardText>
                <MDBCardText>Company: {user.company.name}</MDBCardText>
                <MDBCardText>
                  Address: {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}
                </MDBCardText>

                {/* Social Icons */}
                <div className="mb-4 pb-2">
                  <Button variant="outline-primary" className="me-1">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </Button>
                  <Button variant="outline-primary" className="me-1">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </Button>
                  <Button variant="outline-primary">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </Button>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
