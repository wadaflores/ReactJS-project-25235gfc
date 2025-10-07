import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Form, Button, Row, Col } from "react-bootstrap";
import reactLogo from '../assets/react.svg';
import { useCart } from "../context/CartContext";

export default function Header(){
    const { numCart } = useCart();

    return(
        <Navbar bg="primary" variant="dark" expand="lg" className="sticky-top">
            <Container fluid>
                <img src={reactLogo} className="logo react" alt="React logo" />
                <Navbar.Brand as={Link} to="/">
                    ReactJS Store Project 2025
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/products" className="text-md-center">
                            Products
                        </Nav.Link>
                        <Nav.Link as={Link} to="/clients" className="text-md-center">
                            Clients
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="text-md-center">
                            Contact
                        </Nav.Link>
                    </Nav>
                    <Nav.Link as={Link} to="/cart" className="me-2 ">
                        <Button className="px-2 position-relative text-white">
                            <i className="bi bi-cart fs-5"></i>
                            {numCart > 0 && (
                                <span className="round-circle bg-warning">{numCart}</span>
                            )}
                        </Button>
                    </Nav.Link>
                    <Form inline>
                        <Row>
                            <Col className="pe-0">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                />
                            </Col>
                            <Col xs="auto">
                                <Button type="submit" className="bg-secondary">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}