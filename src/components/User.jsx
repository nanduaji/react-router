import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon,
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

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users/10")
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error fetching user:", error));
  }, []);

  if (!user) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <ClipLoader color="#007bff" size={50} />
      </div>
    );
  }

  return (
    <div className="vh-100" style={{ backgroundColor: "#eee" }}>
      <h2 style={{ display: "flex", justifyContent: "center",paddingTop:'30px' }}>Your Profile Overview</h2>
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-center">
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
                <div className="mb-4 pb-2">
                  <Button outline floating>
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </Button>
                  <Button outline floating className="mx-1">
                    <FontAwesomeIcon icon={faTwitter} size="lg" className="mx-1" />
                  </Button>
                  <Button outline floating>
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
