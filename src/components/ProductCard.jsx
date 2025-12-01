import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductCard = ({prod, addToCart}) => {

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
        <Card className="mb-4 shadow-sm card-product">
            <Link to={`/products/${prod.id}`} className="text-decoration-none text-dark">
                <div className="text-end m-2">
                    {getCategory(prod.category)}
                </div>
                <Card.Img variant="top" src={prod.image} style={{ objectFit: "contain", height: "150px" }} alt={"imagen del producto " + prod.title} />
                <hr/>
                <Card.Body className="pt-0">
                    <Card.Title className="truncate" data-bs-original-title={prod.title}>
                        <span className="fs-6">{prod.title}</span>
                        {/* {prod.title.length > 45  ? prod.title.slice(0, 45) + "..." : prod.title} */}
                    </Card.Title>
                    <div className="d-flex align-items-center mb-2">
                        {[...Array(5)].map((_, i) => {
                            const ratingValue = prod.rating.rate;
                            if (ratingValue >= i + 0.8) {
                                return <FaStar key={i} color="#ffc107" size={16} className="me-1" />;
                            } else if (ratingValue >= i + 0.5) {
                                return <FaStarHalfAlt key={i} color="#ffc107" size={16} className="me-1" />;
                            } else {
                                return <FaRegStar key={i} color="#e4e5e9" size={16} className="me-1" />;
                            }
                        })}
                        <small>
                            <span className="mx-1">{prod.rating.rate}</span>
                            <span className="text-muted">({prod.rating.count})</span>
                        </small>
                    </div>
                    <Card.Text><span className="text-dark fw-bold">US$ {prod.price}</span></Card.Text>
                </Card.Body>
            </Link>
                <div className="position-absolute bottom-0 mb-3 ms-3">
                    <Button 
                        variant="primary"
                        onClick={() => addToCart(prod)}
                    >
                        Add to cart
                    </Button>
                </div>
        </Card>
    )
};

export default ProductCard;