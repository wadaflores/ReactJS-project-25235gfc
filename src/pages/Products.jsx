import {Spinner, Card, Button, Row, Col} from "react-bootstrap";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom"

export default function Products(){
    const [products, setProducts] = useState([]);
    const { numCart, setNumCart } = useCart();

        useEffect(()=>{
            fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => console.error('Error:', error));
        },[]);

    if(!products) return <p><Spinner animation="border" size="sm" variant="success" />Loading products...</p>

    function getCategory(category) {
        switch (category) {
            case "men's clothing":
                return <span className="badge rounded-pill bg-light border">{category}</span>;
            case "women's clothing":
                return <span className="badge rounded-pill bg-secondary">{category}</span>;
            case "electronics":
                return <span className="badge rounded-pill bg-warning text-dark">{category}</span>;
            case "jewelery":
                return <span className="badge rounded-pill bg-info">{category}</span>;
            default:
                return <span className="badge rounded-pill bg-dark">{category}</span>;
        }
    }

    return (
        <div className="mt-4">
            <h2 className="mb-4">All Products</h2>
            <Row>
                {products.map((prod)=>(
                    <Col key={prod.id} md={4} lg={3}>
                            <Card className="mb-4 shadow-sm">
                                <Link to={`/products/${prod.id}`} className="text-decoration-none text-dark">

                                    <div className="text-end m-2">
                                        {getCategory(prod.category)}
                                    </div>
                    
                                    <Card.Img variant="top" src={prod.image} style={{ objectFit: "contain", height: "150px" }}/>
                                    <hr/>
                                                            
                    
                                    <Card.Body className="pt-0">
                                        <Card.Title className="truncate" data-bs-original-title={prod.title}>
                                            <span className="fs-6">{prod.title}</span>
                                            {/* {prod.title.length > 45  ? prod.title.slice(0, 45) + "..." : prod.title} */}
                                        </Card.Title>
                                        <Card.Text><span className="text-dark fw-bold">US$ {prod.price}</span></Card.Text>
                                    </Card.Body>
                                </Link>
                                    <div className="position-absolute bottom-0 mb-3 ms-3">
                                        <Button 
                                            variant="primary"
                                            onClick={() => setNumCart(numCart + 1)}
                                        >
                                            Add to cart
                                        </Button>
                                    </div>
                            </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

