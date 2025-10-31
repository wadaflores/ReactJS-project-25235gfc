import { Link, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav, Form, Button, Row, Col } from "react-bootstrap";
import reactLogo from '../assets/react.svg';
import { useCart } from "../context/CartContext";
import { BsFillPersonFill, BsCart } from 'react-icons/bs';
import { useAuth } from '../context/AuthContext';

export default function Header(){
    const { numCart } = useCart();
    const { logout } = useAuth();
    const navigate = useNavigate();
    //const isAuth = localStorage.getItem('auth')==='true';
        const {token, userAuth} = useAuth();
    
    const closeSession=()=>{
        localStorage.removeItem('auth');
        logout();
        navigate('/login')
    }

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

                        {token && userAuth && (
                            <Nav.Link as={Link} to="/admin" className="text-md-center">
                                | <span className="text-decoration-underline ms-2">Admin</span>
                            </Nav.Link>
                        )}

                        {!token || !userAuth ? (
                            <Nav.Link as={Link} to="/login" className="text-md-center">
                                <BsFillPersonFill className="mb-1"/>
                            </Nav.Link>
                        ) : (<div className="pt-1">
                            <Button variant="outline-light" onClick={closeSession} className="btn-sm p-1">Log out</Button></div>
                        )}
                        
                    </Nav>
                    <Nav.Link as={Link} to="/cart" className="me-2">
                        <Button className="px-2 position-relative text-white">
                            <BsCart size={22} />
                            {numCart > 0 && (
                                <span className="round-circle-cart bg-warning">{numCart}</span>
                            )}
                        </Button>
                    </Nav.Link>
                    <Form>
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