import "./NavBar.css";
import { Link } from "react-router-dom";
import  react  from "react";


const Item = ({ info }) => {
return (
    <Link to={`/detalle/${info.id}`} className="cajaProducto">
        <img className="remera" src={info.imagen} alt ="remera"/>
        <p className="descripcion">{info.title}</p>
        <button className="detalles">See more</button>
    </Link>
);}

export default Item;
