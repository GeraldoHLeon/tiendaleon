import react from "react";
import "./NavBar.css";


export const ItemDetail = ({ data }) => {
return (
<div className="container">
<div className="detail">
<img className="detail_image" src={data.imagen} alt=""/>
<div className="content">
<h1>{data.title}</h1>
<h3 classname="descripcion">{data.descripcion}</h3>
<h3 classname="precio">{data.precio}</h3>
</div>
</div>
</div>

);}

export default ItemDetail