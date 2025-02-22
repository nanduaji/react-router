import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
  const [currentUrl,setCurrentUrl] = useState('')
  useEffect(() => {
    console.log("window.location.href",window.location.href)
    setCurrentUrl(window.location.href)
  },[])
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-1">
      <Container>
        <Navbar.Brand href="/">Our Company</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{color: currentUrl === window.location.origin + '/' ? 'red' : 'black'}}>Home</Nav.Link>
            <Nav.Link href="/about" style={{color: currentUrl === window.location.origin + '/about' ? 'red' : 'black'}}>About</Nav.Link>
            <Nav.Link href="/user" style={{color: currentUrl === window.location.origin + '/user' ? 'red' : 'black'}}>User</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header