import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaWhatsapp  } from 'react-icons/fa';


function AppNavbar() {
  return (
    <div className='app-navbar'>
      <Navbar className='navbar' bg='dark' variant='dark' expand='lg'>
        <Container className='navbar-container'>
          <Navbar.Brand href='#'>
            <img className='navbar-logo' src='./Images/crecentMoon.jpg' alt='crecent moon' type='image'/>
            Midnight Social Club
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar'/>
          <Navbar.Collapse id='navbar'>
            <Nav className="me-auto">
              <Nav.Link href='#'>Menu</Nav.Link>
              <Nav.Link href='#'>About Mixologist</Nav.Link>
              <Nav.Link href='#'>Testimonials</Nav.Link>
              <Nav.Link href='#'>Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='https://www.instagram.com'>
                <FaInstagram />
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='https://www.facebook.com'>
                <FaFacebook />
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='https://www.twitter.com'>
                <FaTwitter />
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='https://www.tiktok.com'>
                <FaTiktok />
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='https://www.whatsapp.com/'>
                <FaWhatsapp />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default AppNavbar;