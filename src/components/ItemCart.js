import "./NavBar.css";
import React from "react";
import { useCartContext } from "../CartContext.js";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    <div className="itemCart">
      <img src={product.imagen} alt={product.title} className="productCart" />
      <div className="detalleCart">
        <p>name: {product.title}</p>
        <p>number of items: {product.cantidad}</p>
        <p>precio u.: {product.precio}</p>
        <p>subtotal: ${product.cantidad * product.precio}</p>
        <button className="remove" onClick={() => removeProduct(product.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};
export default ItemCart;
