import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import {Spinner, Card, Button, Row, Col} from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function ProductDetail(){
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();

    useEffect(()=>{
                fetch(`https://fakestoreapi.com/products/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    setProduct(data);
                })
                .catch((err) => console.error("Error:", err));
            },[id]);
    
    if(!product) return  <span><Spinner animation="border" size="sm" variant="success" /> Loading products...</span>

    return (
        <div className="mt-4">
            <h2 className="mb-4">Product: {product.title}</h2>
            <Row className="d-flex align-items-center px-5">
                <Col md={4} lg={3} className="ms-4 mb-4">
                    <Card className="border-0">
                        <Card.Img variant="top" src={product.image} style={{ objectFit: "contain", height: "200px" }}/>                               
                    </Card>
                </Col>
                <Col className="me-4">
                    <Card className="p-4 shadow-sm">
                        <Card.Body className="pt-0">
                            <Card.Title>{product.title}</Card.Title>
                            <div className="d-flex align-items-center mb-2">
                                {[...Array(5)].map((_, i) => {
                                    const ratingValue = product.rating.rate;
                                    if (ratingValue >= i + 0.8) {
                                        return <FaStar key={i} color="#ffc107" size={16} className="me-1" />;
                                    } else if (ratingValue >= i + 0.5) {
                                        return <FaStarHalfAlt key={i} color="#ffc107" size={16} className="me-1" />;
                                    } else {
                                        return <FaRegStar key={i} color="#e4e5e9" size={16} className="me-1" />;
                                    }
                                })}
                                <small>
                                    <span className="mx-1 text-dark">{product.rating.rate}</span>
                                    <span className="text-muted">({product.rating.count})</span>
                                </small>
                            </div>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text><span className="text-dark fw-bold">US$ {product.price}</span></Card.Text>
                            <Button 
                                className="mb-3" 
                                variant="primary" 
                                onClick={() => addToCart(product)}
                                >
                                Add to Cart
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
