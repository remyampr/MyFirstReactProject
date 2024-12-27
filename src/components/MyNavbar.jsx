import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  InputGroup,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";
import "../style/MyNavbar.css";

import plants from "../assets/icons/plants.png";

function MyNavbar({ setSelectedCategory, setSearchedText }) {
  return (
    <Navbar bg="success" variant="dark" expand="lg" className="nav-header">
      <Container className="nav-items">
        <Navbar.Brand
          href="#home"
          style={{ fontFamily: "Cursive", fontSize: "1.5rem" }}
          className="brand-name"
        >
          Plantora
          <img src={plants} alt="icon" />
        </Navbar.Brand>

        <InputGroup className="w-auto search-bar">
          <span className="search-icon">
            <i className="fa fa-search"></i>
          </span>
          <Form.Control
            type="search"
            placeholder="Search here..."
            aria-label="Search"
            className="input-box "
            onInput={(event) => {
              setSearchedText(event.target.value);
              console.log("input box content : ", event.target.value);
            }}
          />
          {/* <Button
            variant="success"
            id="search-button"
            className="search-button rounded-pill"
          > */}

          {/* </Button> */}
        </InputGroup>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown
              title="Categories"
              id="basic-nav-dropdown"
              onSelect={(category) => {
                setSelectedCategory(category);
                // console.log("Inside MyNavbar , EventKey : ", category);
              }}
            >
              <NavDropdown.Item eventKey="All">All</NavDropdown.Item>
              <NavDropdown.Item eventKey="Indoor">
                Indoor Plants
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="Outdoor">
                Outdoor Plants
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="Succulent">
                Succulents
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
