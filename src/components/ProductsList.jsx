import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import {Spinner, Row, Col} from "react-bootstrap";
import ProductCard from './ProductCard';
import { useSearch } from "../context/SearchContext";

const ProductsList = ({category = null}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();
    const { searchBar } = useSearch();

    const filteredProducts = products.filter(prod =>
        prod.title.toLowerCase().includes(searchBar.toLowerCase()) ||
        prod.description.toLowerCase().includes(searchBar.toLowerCase())
    );

    useEffect(()=>{
            let url = 'https://fakestoreapi.com/products';
            if (category){
                url = `https://fakestoreapi.com/products/category/${category}`;
            }
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => console.error('Error:', error));
    },[category]);

    if(loading) return <span><Spinner animation="border" size="sm" variant="success" />Loading products...</span>
    
    return (
        <Row>
            {filteredProducts.map((prod)=>(
                <Col key={prod.id} md={4} lg={3}>
                    <ProductCard prod={prod} addToCart={addToCart}/>
                </Col>
            ))}
        </Row>
    )
};

export default ProductsList;