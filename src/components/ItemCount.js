import { useState } from "react";
import "./NavBar.css";
import props from "react";

const ItemCount = ({stock})=>{
    const [contador,setContador] = useState(0);
    const aumentar =() =>{ if(contador<stock){setContador( contador + 1) }};
    const disminuir =() =>{ if(contador>0){setContador( contador - 1 ) }};

return(
    <div className="contenedorContador">
<button onClick={disminuir}>-</button>
<p className="cifra">{contador}</p>
<button onClick={aumentar}>+</button>
</div>
)}


export default ItemCount