import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [numCart, setNumCart] = useState(0);

    return (
        <CartContext.Provider value={{ numCart, setNumCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
