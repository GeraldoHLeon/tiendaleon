import "./NavBar.css";
import carrito from "./imagenes/carrito1.png";
import { useCartContext } from "../CartContext";

export const CartWidget = () => {
  const { totalProducts } = useCartContext();
  return (
    <>
      <div id="choice">
        <span>{totalProducts() || ""}</span>
        <img id="carrito" src={carrito} alt="carrito" />
      </div>
    </>
  );
};

export default CartWidget;
