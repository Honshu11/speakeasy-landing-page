import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <Container fluid className='footer mx-auto'>
      <Row>
        <Col>
          <small>&#169; Copyright Gonzo Inc.</small>
        </Col>
      </Row>
      <Row className='media-container'>
        <Col>
          <a href='https://www.instagram.com'>
            <i className='bi bi-instagram'></i>
          </a>
        </Col>
        <Col>
          <a href='https://www.facebook.com'>
            <i className='bi bi-facebook'></i>
          </a>
        </Col>
        <Col>
          <a href='https://www.twitter.com'>
            <i className='bi bi-twitter'></i>
          </a>
        </Col>
        <Col>
          <a href='https://www.tiktok.com'>
            <i className='bi bi-tiktok'></i>
          </a>
        </Col>
        <Col>
          <a href='https://www.whatsapp.com'>
            <i className='bi bi-whatsapp'></i>
          </a>
        </Col>
      </Row>
    </Container>
  );
}


export default Footer;