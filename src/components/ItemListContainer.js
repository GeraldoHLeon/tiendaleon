import "./NavBar.css";
import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";
import  ItemCount  from "./ItemCount";
import remeraRoja from "./imagenes/remera/PNG/remeraRoja.png";
import remeraAzul from "./imagenes/remera/PNG/remeraAzul.png";
import remeraNegro from "./imagenes/remera/PNG/remeraNegro.png";

const allProducts =[
{id: 1, imagen:remeraRoja, title:"Red T-shirt"},
{id: 1, imagen:remeraAzul, title:"blue T-shirt"},
{id: 1, imagen:remeraNegro, title:"black T-shirt"},
];

export const ItemListContainer = ({titulo})=> {
const [data, setData] =useState([]);

useEffect(() => {
const getData = new Promise(resolve => {
    setTimeout(() => {
resolve (allProducts);
    },2000 );

});
getData.then(res => setData(res))
},[])


const onAdd = (cantidad) => {
    console.log("compraste " + cantidad + " unidades");}
 return (
 <>
    <div id="primeraSeccion">
    <p id="textoPrimeraSeccion">{titulo}</p>
    <div className="catalogo">
    <ItemList data={data}/>
    </div>
    <ItemCount stock={6} onAdd={onAdd} />
 </div>
 </>

 )}

 export default ItemListContainer;