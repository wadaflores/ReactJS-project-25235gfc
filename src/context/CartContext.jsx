import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [numCart, setNumCart] = useState(0);
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prevCart => [...prevCart, product]);
        setNumCart(prev => prev + 1);
    };

    const emptyCart = () => { 
        setCart([]);
        setNumCart(0);
    }

    return (
        <CartContext.Provider value={{ numCart, setNumCart, cart, setCart, addToCart, emptyCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}