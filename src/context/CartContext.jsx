import { createContext, useContext, useState, useEffect } from "react";
import Swal from 'sweetalert2'

const CartContext = createContext();

export function CartProvider({ children }) {
    //const [numCart, setNumCart] = useState(0);
    //const [cart, setCart] = useState([]);
    const [cart, setCart] = useState(() => {
        const stored = localStorage.getItem("cart");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart(prevCart => [...prevCart, product]);
        //setNumCart(prev => prev + 1);
        Swal.fire({
            position: "top",
            width: "450",
            icon: "success",
            title: "Product added!",
            showConfirmButton: false,
            timer: 1000
        });
    };

    const emptyCart = () => { 
        setCart([]);
        Swal.fire({
            position: "top",
            width: "450",
            icon: "error",
            title: "Products deleted!",
            showConfirmButton: false,
            timer: 1000
        });
        //setNumCart(0);
    }

    const numCart = cart.length;

    return (
        <CartContext.Provider value={{ numCart, cart, setCart, addToCart, emptyCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}