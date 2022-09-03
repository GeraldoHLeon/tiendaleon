import "./NavBar.css";
import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";
import  ItemCount  from "./ItemCount";
import { useParams } from "react-router-dom";
import remeraRoja from "./imagenes/remera/PNG/remeraRoja.png";
import remeraAzul from "./imagenes/remera/PNG/remeraAzul.png";
import remeraNegro from "./imagenes/remera/PNG/remeraNegro.png";
import remeraAmarilla from "./imagenes/remera/PNG/remeraAmarilla.png";
import remeraBlanca from "./imagenes/remera/PNG/remeraBlanco.png";
import remeraVerde from "./imagenes/remera/PNG/remeraVerde.png";
import remeraRosa from "./imagenes/remera/PNG/remeraRosa.png";
import remeraPurpura from "./imagenes/remera/PNG/remeraPurpura.png";
import remeraNaranja from "./imagenes/remera/PNG/remeraNaranja.png";
import Prosa from "./imagenes/panties/pantieRosa.png";
import shortNaranja from "./imagenes/short/shortNaranja.png";

const allProducts =[
{id: 1, imagen:remeraRoja, title:"Red T-shirt", category:"remera"},
{id: 2, imagen:remeraAzul, title:"Blue T-shirt", category:"remera"},
{id: 3, imagen:remeraNegro, title:"Black T-shirt", category:"remera"},
{id: 4, imagen:remeraAmarilla, title:"Yellow T-shirt", category:"remera"},
{id: 5, imagen:remeraBlanca, title:"White T-shirt", category:"remera"},
{id: 6, imagen:remeraVerde, title:"Green T-shirt", category:"remera"},
{id: 7, imagen:remeraRosa, title:"Pink T-shirt", category:"remera"},
{id: 8, imagen:remeraPurpura, title:"Purple T-shirt", category:"remera"},
{id: 9, imagen:remeraNaranja, title:"Orange T-shirt", category:"remera"},
{id: 10, imagen:Prosa, title:"Pink Panty", category:"panties"},
{id: 11, imagen:shortNaranja, title:"Orange Short", category:"shorts"},
];

export const ItemListContainer = ({titulo})=> {
const [data, setData] =useState([]);

const {categoriaId} = useParams();

useEffect(() => {
const getData = new Promise(resolve => {
    setTimeout(() => {
resolve (allProducts);
    },1000 );

});
if (categoriaId){
    getData.then(res =>  setData( res.filter(remera => remera.category === categoriaId)));
} else if(categoriaId){
    getData.then(res =>  setData( res.filter(shorts => shorts.category === categoriaId)));
}else if(categoriaId){
    getData.then(res =>  setData( res.filter(panties => panties.category === categoriaId)));}
else {
    getData.then(res => setData(res))
}
},[categoriaId])


const onAdd = (cantidad) => {
    console.log("compraste " + cantidad + " unidades");}
 return (
 <>
    <div id="primeraSeccion">
    <p id="textoPrimeraSeccion">{titulo}</p>
    <div className="catalogo">
    <ItemList data={data}/>
    </div>
    {/* <ItemCount stock={6} onAdd={onAdd} /> */}
 </div>
 </>

 )}

 export default ItemListContainer;