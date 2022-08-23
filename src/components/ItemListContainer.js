import "./NavBar.css";
import props from "react"

function ItemListContainer(props) {
    console.log(props)
    const inicio= props.titulo;
 return (
 <>
 <div id="primeraSeccion">
 <p id="textoPrimeraSeccion">{inicio}</p>
 </div> 
 </>

 )}

 export default ItemListContainer;