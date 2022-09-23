import "./NavBar.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext.js";
import ItemCart from "../components/ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";



const Cart = () => {
const { Cart, totalPrice } = useCartContext();

const sendOrder = (e) =>{
        e.preventDefault();
        const order = {
            buyer: {
                email: e.target[0].value,
            },
            items: Cart.map(product => ({ id: product.id, title: product.title, precio: product.precio, cantidad: product.cantidad})),
            total: totalPrice(),  
        };
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log(id))
        }

       
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
    total: {totalPrice()} $
</p>
<h2>Validation</h2>
        <form onSubmit={sendOrder}>
           
                <input type="email" placeholder="example@example.com" required />
            
             <button type="submit" >Terminar compra</button>
        </form>


</>

)}

 export default Cart;