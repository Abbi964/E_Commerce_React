import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function Footer(props) {
  return (
    <Container className="mt-5" fluid>
      <Row className=" bg-primary">
        <Col id="title">
          <span style={{fontSize:'3rem'}}>The Generics</span>
        </Col>
        <Col></Col>
        <Col className="d-flex align-items-center justify-content-evenly p-3" id="socials">
          <a  href="https://www.youtube.com">
            <img style={{height:'30px'}} src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg" alt="" />
          </a>
          <a  href="https://spotify.com">
            <img style={{height:'30px'}} src="https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png" alt="" />
          </a>
          <a href="https://facebook.com">
            <img style={{height:'30px'}} src="https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png" alt="" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
