import "./NavBar.css";
import carrito from "./imagenes/carrito.webp";

 function CartWidget() {
 return (
 <>
 <div id="choice">
<img id="carrito" src={carrito} alt ="carrito"/>
 <p>4</p>
</div>
 </>

)}

 export default CartWidget;