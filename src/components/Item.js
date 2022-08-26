import "./NavBar.css";
import  react  from "react";


const Item = ({ info }) =>{
return (
    <a className="cajaProducto">
        <img className="remera" src={info.imagen} alt ="remera"/>
        <p className="descripcion">{info.title}</p>
        <button className="detalles">See more</button>
    </a>
);}

export default Item;
