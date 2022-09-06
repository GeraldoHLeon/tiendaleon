import {  useState  } from "react";
import "./NavBar.css";
import props from "react";

const ItemCount = ({stock, onAdd})=>{
    const [contador,setContador] = useState(0);
    const aumentar =() =>{ if(contador<stock){setContador( contador + 1) }};
    const disminuir =() =>{ if(contador>0){setContador( contador - 1 ) }};

return(
    <div className="contenedorMayor">
    <div className="contenedorContador">
<button disabled={contador <= 0} onClick={disminuir}>-</button>
<p className="cifra">{contador}</p>
<button disabled={contador >= stock} onClick={aumentar}>+</button>
</div>
<div className="contenedorContador">
<button className="agregarCarrito" disabled={stock <= 0} onClick={() => onAdd(contador)}>Agregar</button>
</div>
</div>
)}


export default ItemCount