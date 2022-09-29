import "./NavBar.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext.js";
import ItemCart from "../components/ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
  const { Cart, totalPrice } = useCartContext();

  const sendOrder = (e) => {
    e.preventDefault();
    const order = {
      buyer: {
        email: e.target[0].value,
      },
      items: Cart.map((product) => ({
        id: product.id,
        title: product.title,
        precio: product.precio,
        cantidad: product.cantidad,
      })),
      total: totalPrice(),
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));
  };

  if (Cart.length === 0) {
    return (
      <>
      <div className="carritoVacio">
        <p>Cart is empty</p>
        <Link to="/">🐼go shopping🐼</Link>
        </div>
      </>
    );
  }

  return (
    <>
      {Cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}

      <p className="precioPagar">total: {totalPrice()} $</p>
      <h2 className="validation">Validation</h2>
      <form className="formulario" onSubmit={sendOrder}>
        <input type="text" placeholder="full name" required />

        <input type="text" placeholder="telephone" required />

        <input type="email" placeholder="example@example.com" required />

        <button type="submit">Terminar compra</button>
      </form>
    </>
  );
};

export default Cart;
