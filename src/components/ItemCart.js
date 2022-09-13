import "./NavBar.css";
import React from "react";
import { useCartContext } from "../CartContext.js";

const ItemCart = ({ product }) => {
const { removeProduct } = useCartContext();
return (
    <div className="itemCart">
        <img src={product.imagen} alt={product.title} className="productCart" />
        <div>
            <p>titulo: {product.title}</p>
            <p>cantidad: {product.cantidad}</p>
            <p>precio u.: {product.precio}</p>
            <p>subtotal: ${product.cantidad * product.precio}</p>
            <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>

    )
}
 export default ItemCart;