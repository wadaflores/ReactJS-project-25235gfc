import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {Spinner, Card, Button, Row, Col} from "react-bootstrap";
import { useCart } from "../context/CartContext";


export default function ProductDetail(){
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const { numCart, setNumCart } = useCart();

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
            <Row className="justify-content-center">
                <Col>
                    <div className="mb-4 shadow-sm text-center">
                        <div style={{ height: 200 }}>
                            <Card.Img
                                variant="top"
                                src={product.image}
                                alt={product.title}
                                style={{ objectFit: "contain", maxHeight: "100%" }}
                            />
                        </div>
                        <hr />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text className="fw-bold text-dark">US$ {product.price}</Card.Text>
                            <Button className="mb-3" variant="primary" onClick={() => setNumCart(numCart + 1)}>
                                Add to Cart
                            </Button>
                        </Card.Body>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
