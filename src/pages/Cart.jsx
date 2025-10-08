import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ProdsInCart from '../components/ProdsInCart';


export default function Cart(){
    return (
        <>
            <h2 className="mt-4">Shopping Cart</h2>
            <ProdsInCart />
        </>
    );
}