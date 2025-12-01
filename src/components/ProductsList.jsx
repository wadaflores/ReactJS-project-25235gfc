import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import {Spinner, Row, Col, Form} from "react-bootstrap";
import ProductCard from './ProductCard';
import { useSearch } from "../context/SearchContext";

const ProductsList = ({category = null , mockApi, limit, showFilters = true }) => {
    const [products, setProducts] = useState([]);
    const [filterByPrice, setFilterByPrice] = useState("none");
    const [filterByCategory, setFilterByCategory] = useState("all");
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();
    const { searchBar } = useSearch();

    let filteredProducts = products.filter(prod =>
        prod.title.toLowerCase().includes(searchBar.toLowerCase()) ||
        prod.description.toLowerCase().includes(searchBar.toLowerCase())
    );

    if (filterByCategory !== "all") {
        filteredProducts = filteredProducts.filter((prod) => prod.category === filterByCategory);
    }

    if (filterByPrice === "asc") filteredProducts.sort((a, b) => a.price - b.price);
    if (filterByPrice === "desc") filteredProducts.sort((a, b) => b.price - a.price);

    useEffect(()=>{
            let url = 'https://fakestoreapi.com/products';
            if (category){
                url = `https://fakestoreapi.com/products/category/${category}`;
            }
            if(mockApi){
                url = "https://68fffe00e02b16d1753fd185.mockapi.io/Products";
            }
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => console.error('Error:', error));
    }, [category, mockApi]);

    if(loading) return <span><Spinner animation="border" size="sm" variant="success" />Loading products...</span>
        

    const categories = [...new Set(products.map(p => p.category))];

    function getCategoryOptions(categories) {
        return categories.map(cat => (
            <option key={cat} value={cat}>
                {cat}
            </option>
        ));
    }

    if (limit) {
        filteredProducts = filteredProducts.slice(0, limit);
    }
    
    return (
        <>
        {showFilters && (
            <Row className="mb-3 d-flex align-items-center">
                <Col md={2}>
                    <Form.Select
                        value={filterByCategory}
                        onChange={(e) => setFilterByCategory(e.target.value)}
                    >
                        <option value="all">All categories</option>
                        {getCategoryOptions(categories)}
                    </Form.Select>
                </Col>
                <Col md={2}>
                    <Form.Select
                        value={filterByPrice}
                        onChange={(e) => setFilterByPrice(e.target.value)}
                    >
                        <option value="none">Sort by price:</option>
                        <option value="asc">Price: Low to High</option>
                        <option value="desc">Price: High to Low</option>
                    </Form.Select>
                </Col>
                <Col md="auto">
                    <p className="text-muted mb-0">
                        {filteredProducts.length} of {products.length} products found.
                    </p>
                </Col>
            </Row>
        )}
            <Row>
                {filteredProducts.map((prod)=>(
                    <Col key={prod.id} md={4} lg={3}>
                        <ProductCard prod={prod} addToCart={addToCart}/>
                    </Col>
                ))}
            </Row>
        </>
    )
};

export default ProductsList;