import "./NavBar.css";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  return (
    <Link to={`/detalle/${info.id}`} className="cajaProducto">
      <img className="remera" src={info.imagen} alt="remera" />
      <p className="descripcion">{info.title}</p>
    </Link>
  );
};

export default Item;
