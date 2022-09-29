import "./NavBar.css";
import React, { useState } from "react";
import { useCartContext } from "../CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

export const ItemDetail = ({ data }) => {
  const [goToCart, setgoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (cantidad) => {
    setgoToCart(true);
    addProduct(data, cantidad);
  };
  return (
    <div className="container">
      <div className="detail">
        <img className="detail_image" src={data.imagen} alt="" />

        <div className="content">
          <h1>{data.title}</h1>
          <h3 id="descripcion">{data.descripcion}</h3>
          <h3 className="precio">{data.precio} $</h3>
          <div className="terminar">
            {goToCart ? (
              <Link to="/cart">Proceed to checkout</Link>
            ) : (
              <ItemCount stock={6} onAdd={onAdd} />
            )}
          </div>
          <Link to="/" id="pandita">
            <div>🐼</div>
            <p id="keep">keep shopping</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
