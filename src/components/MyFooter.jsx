import { Container, Row, Col, ListGroup } from 'react-bootstrap';
export default function MyFooter() {
  return (
    <footer style={{ backgroundColor: '#2c6e49', color: 'white', padding: '20px 0' }}>
      <Container>
        <Row>
          <Col md={4}>
            <h5>Plantora</h5>
            <p>Your one-stop plant care app, providing resources and tools to nurture your plants.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ListGroup>
              <ListGroup.Item action href="#home" style={{ backgroundColor: '#2c6e49', border: 'none' }}>
                Home
              </ListGroup.Item>
              <ListGroup.Item action href="#categories" style={{ backgroundColor: '#2c6e49', border: 'none' }}>
                Categories
              </ListGroup.Item>
              <ListGroup.Item action href="#about" style={{ backgroundColor: '#2c6e49', border: 'none' }}>
                About Us
              </ListGroup.Item>
              <ListGroup.Item action href="#contact" style={{ backgroundColor: '#2c6e49', border: 'none' }}>
                Contact
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ListGroup>
              <ListGroup.Item action href="https://facebook.com" style={{ backgroundColor: '#2c6e49', border: 'none' }}>
                Facebook
              </ListGroup.Item>
              <ListGroup.Item action href="https://instagram.com" style={{ backgroundColor: '#2c6e49', border: 'none' }}>
                Instagram
              </ListGroup.Item>
              <ListGroup.Item action href="https://twitter.com" style={{ backgroundColor: '#2c6e49', border: 'none' }}>
                Twitter
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <p>&copy; 2024 Plantora. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
