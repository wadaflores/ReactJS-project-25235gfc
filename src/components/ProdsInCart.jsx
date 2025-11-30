import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Button, Card, ListGroup, Row, Col } from "react-bootstrap";
import { BsCart, BsTrash3 } from 'react-icons/bs';
import Swal from 'sweetalert2'

export default function ProdsInCart() {
    const { cart, setCart, emptyCart } = useCart();

    const groupedCart = cart.reduce((acc, product) => {
        cart.sort((a, b) => a.id - b.id);
        const existing = acc.find(prod => prod.id === product.id);
        if (existing) {
            existing.quantity += 1;
        } else {
            acc.push({ ...product, quantity: 1 });
        }
        return acc;
    }, []);

    const removeFromCart = (product) => {
        let removed = 0;

        const newCart = cart.filter((item) => {
            if (item.id === product.id && removed < 1) {
                removed = 1;
                return false;
            }
            return true;
        });

    setCart(newCart);
};

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
};


    const netPrice = groupedCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalTax = netPrice * 0.21;
    const totalPrice = netPrice + totalTax;


    if (cart.length === 0) {
        return (
            <div className="text-center mt-5">
                <BsCart size={40} color="#999" className="mb-3" />
                <h5 className="text-muted">Your cart is empty</h5>
                <Button className='btn btn-info' as={Link} to="/products">Shop now!</Button>      
            </div>
        );
    }

    return (
        <div>
            <Row className="mt-4">
                <Col md={9}>
                    <ListGroup className="mb-4 rounded">
                        {groupedCart.map((product) => (
                            <Row className="align-items-center">
                                <ListGroup.Item className="py-1 border-0">
                                    <Row className="align-items-center border-bottom m-2 p-2">
                                        <Col md={1} className="text-center">
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                style={{ height: "50px", objectFit: "contain", maxWidth: "inherit" }}
                                            />
                                        </Col>
                                        <Col md={5}>
                                            <strong>{product.title}</strong>
                                        </Col>
                                        <Col md={2}>Unit: <span className="text-dark">US${product.price.toFixed(2)}</span></Col>
                                        <Col md={2}>Qty: <span className="text-dark me-1">{product.quantity}</span>
                                        <Button
                                            variant="outline-success border-0 fw-bold p-1"
                                            size="sm"
                                            style={{ width: "25px" }}
                                            onClick={() => addToCart(product)}
                                        >
                                            +
                                        </Button>
                                        <Button
                                            variant="outline-danger border-0 fw-bold p-1"
                                            size="sm"
                                            style={{ width: "25px" }}
                                            onClick={() => removeFromCart(product)}
                                        >
                                            {product.quantity === 1 ? <BsTrash3 /> : "-"}

                                        </Button>
                                        </Col>
                                        
                                        <Col md={2}><b className="text-dark">US${(product.price * product.quantity).toFixed(2)}</b></Col>
                                        
                                    </Row>
                                </ListGroup.Item>
                            </Row>
                        ))}
                    </ListGroup>           
                </Col>
                <Col md={3}>
                    <Card className="p-4 shadow-sm rounded-3">
                        <h4 className="mb-3">Order Summary</h4>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="d-flex justify-content-between border-0 px-2">
                                <span>Subtotal</span>
                                <strong>US$ {netPrice.toFixed(2)}</strong>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between border-0 px-2 text-secondary">
                                <span>Taxes</span>
                                <span>US$ {totalTax.toFixed(2)}</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between border-0 px-2 text-success">
                                <span>Shipping</span>
                                <span>{netPrice > 100 ? "Free" : "US$ " + (netPrice * 0.1).toFixed(2)}</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between border-top px-2 bg-light mt-2 text-dark">
                                <strong>Total</strong>
                                <strong>US$ {totalPrice.toFixed(2)}</strong>
                            </ListGroup.Item>
                        </ListGroup>
                        <div className="mt-4 d-flex flex-column gap-2">
                            <Button as={Link} to="#" variant="success" className="fw-bold">
                                Buy Now
                            </Button>
                            <Button
                                variant="outline-danger"
                                onClick={emptyCart}
                            >
                                <BsTrash3 className="mb-1 me-2"/>Empty Cart
                            </Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

