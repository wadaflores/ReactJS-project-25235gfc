import { Link, useNavigate, useLocation } from "react-router-dom";
import { Container, Navbar, Nav, Form, Button, Row, Col } from "react-bootstrap";
import reactLogo from '../assets/react.svg';
import { useCart } from "../context/CartContext";
import { BsFillPersonFill, BsCart } from 'react-icons/bs';
import { useAuth } from '../context/AuthContext';
import { useSearch } from "../context/SearchContext";

export default function Header(){
    const { numCart } = useCart();
    const navigate = useNavigate();
    //const isAuth = localStorage.getItem('auth')==='true';
    const {logout, token, userAuth} = useAuth();
    const { searchBar, setSearchBar } = useSearch();
    
    const closeSession=()=>{
        localStorage.removeItem('auth');
        logout();
        navigate('/login')
    }
    const location = useLocation();
    const isProductsPage = location.pathname.startsWith("/products");

    return(
        <Navbar bg="primary" variant="dark" expand="lg" className="sticky-top">
            <Container fluid>
                <div className="d-flex align-items-center">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                    <Navbar.Brand as={Link} to="/">
                        ReactJS Store Project 2025
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </div>
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
                    {isProductsPage && (
                        <div className="pe-2" style={{maxWidth: "200px"}}>
                            <Form onSubmit={(e) => e.preventDefault()}>
                                <Row>
                                    <Col>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Search products" 
                                            value={searchBar} 
                                            onChange={(e)=> setSearchBar(e.target.value)}
                                        />
                                    </Col>  
                                    {/*   
                                    <Col xs="auto">
                                        <Button className="bg-secondary">Search</Button>
                                    </Col>
                                      */} 
                                </Row> 
                            </Form>
                         </div>
                    )}
                    <Nav>
                    <Nav.Link as={Link} to="/cart" className="text-md-center">
                        <Button className="px-2 position-relative text-white">
                            <BsCart size={22} />
                            {numCart > 0 && (
                                <span className="round-circle-cart bg-warning">{numCart}</span>
                            )}
                        </Button>
                    </Nav.Link>
                        {token && userAuth && (
                                <Nav.Link as={Link} to="/dashboard" className="text-md-center pt-3">
                                    | <span className="text-decoration-underline mt-4">Admin</span>
                                </Nav.Link>
                            )}

                            {!token || !userAuth ? (
                                <Nav.Link as={Link} to="/login" className="text-md-center">
                                    <span className="me-3">|</span>
                                    <Button className="px-2 position-relative">
                                        <BsFillPersonFill size={22} />
                                    </Button>
                                </Nav.Link>
                            ) : (<div className="pt-3">
                                <Button variant="outline-light" onClick={closeSession} className="btn-sm p-1">Log out</Button></div>
                            )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}