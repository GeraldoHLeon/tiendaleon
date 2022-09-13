import "./NavBar.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext.js";
import ItemCart from "../components/ItemCart";


 const Cart = () => {
    const { Cart, totalPrice } = useCartContext();

    if (Cart.length === 0) {
        return(
            <>
            <p>no hay elementos en el carrito</p>
            <Link to="/">ve a comprar</Link>
            </>
        );
    }

 return (
 
<>
{
Cart.map(product => <ItemCart key={product.id} product={product} />)
}
<p>
    total: {totalPrice()}
</p>
</>

)}

 export default Cart;