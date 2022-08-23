import "./NavBar.css";
import props from "react";
import  ItemCount  from "./ItemCount";

function ItemListContainer(props) {
    const inicio= props.titulo;
 return (
 <>
 <div id="primeraSeccion">
 <p id="textoPrimeraSeccion">{inicio}</p>
 <ItemCount stock={5}  ></ItemCount>
 </div> 
 </>

 )}

 export default ItemListContainer;