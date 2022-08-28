import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";


const Navigation = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#"><img className="netflix-logo" src="data:image/png;base64,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"></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/movies" className="nav-item">Movies</Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-danger">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default Navigation