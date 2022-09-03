import "./NavBar.css";
 import CartWidget from "./CartWidget";
 import { NavLink } from "react-router-dom";
 import logo from "./imagenes/panda.png";



export const MenuNavegacion = () => {
return (
<nav id="navbar">
<div><img src={logo} alt="logo" id="box1"/></div> 
  <div id="empresa">
    <NavLink to="/">
      <div id="box2">
        <h1 id="marca">팬더</h1>
        <h2 id="subtitulo">Clothes in 8bits</h2>
      </div>
    </NavLink>
 </div>
 <ul id="secciones">
<li>
<NavLink className="item" to="/categoria/remera"> T-shirts</NavLink>
</li>

<li>
<NavLink className="item" to="/categoria/shorts">shorts</NavLink>
</li>

<li>
<NavLink className="item" to="/categoria/panties">panties</NavLink>
</li>

<li>
<NavLink to="/Cart"><CartWidget></CartWidget></NavLink>
</li>
 </ul>

</nav>
)}

export default MenuNavegacion;
