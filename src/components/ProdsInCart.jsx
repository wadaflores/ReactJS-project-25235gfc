import React, { useContext } from 'react'; 
import { useCart } from '../context/CartContext'; 
import { Button } from "react-bootstrap";

export default function ProdsInCart() { 
    const { cart, emptyCart } = useCart(); 
    
    return ( 
        <div>
            {cart.length > 0 ? ( 
                <ul> 
                    {cart.map((product, index) => ( 
                        <li key={index}>{product.title} - ${product.price}</li>
                    ))} 
                </ul> ) : ( 
                    <p>The cart is empty.</p> 
                )} 
                {cart.length > 0 && <Button onClick={emptyCart}>Empty Cart</Button>} 
        </div> 
    ); 
} 