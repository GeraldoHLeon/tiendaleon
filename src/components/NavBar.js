import "./NavBar.css";
 import CartWidget from "./CartWidget";



function MenuNavegacion() {
return (
    <div id="navbar">
    <div id="Empresa">

   <a href="index.html"><div id="box2">
        <h1 id="marca">팬더</h1>
        <h2 id="subtitulo">Clothes in 8bits</h2>
    </div></a>
    </div>


    <div id="secciones">
    <a href="#"> <h2 className="item">t-shirts</h2></a>
    <a href="#"><h2 className="item">shorts</h2></a>
    <a href="#"> <h2 className="item">panties</h2></a>
    <CartWidget></CartWidget>
    </div>

  <div id="primeraSeccion"></div> 
</div>
)}

export default MenuNavegacion;
