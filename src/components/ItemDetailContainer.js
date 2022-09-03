import react, { useState,useEffect } from "react";
import ItemDetail from "./ItemDetail";
import "./NavBar.css";
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
    {id: 1, imagen:remeraRoja, title:"Red T-shirt", category:"remera" ,precio: 2 + "$", descripcion:"Remera clasica roja talla unica"},
    {id: 2, imagen:remeraAzul, title:"Blue T-shirt", category:"remera" ,precio: 2 + "$", descripcion:"Remera clasica azul talla unica"},
    {id: 3, imagen:remeraNegro, title:"Black T-shirt", category:"remera" ,precio: 2 + "$", descripcion:"Remera clasica negra talla unica"},
    {id: 4, imagen:remeraAmarilla, title:"Yellow T-shirt", category:"remera" ,precio: 2 + "$", descripcion:"Remera clasica amarilla talla unica"},
    {id: 5, imagen:remeraBlanca, title:"White T-shirt", category:"remera" ,precio: 2 + "$", descripcion:"Remera clasica blanca talla unica"},
    {id: 6, imagen:remeraVerde, title:"Green T-shirt", category:"remera" ,precio: 2 + "$", descripcion:"Remera clasica verde talla unica"},
    {id: 7, imagen:remeraRosa, title:"Pink T-shirt", category:"remera" ,precio: 2 + "$", descripcion:"Remera clasica rosa talla unica"},
    {id: 8, imagen:remeraPurpura, title:"Purple T-shirt", category:"remera" ,precio: 2 + "$", descripcion:"Remera clasica purpura talla unica"},
    {id: 9, imagen:remeraNaranja, title:"Orange T-shirt", category:"remera" ,precio: 2 + "$", descripcion:"Remera clasica naranja talla unica"},
    {id: 10, imagen:Prosa, title:"Pink Panty", category:"panties" ,precio: 1 + "$", descripcion:"panty clasica rosa talla unica"},
    {id: 11, imagen:shortNaranja, title:"Orange Short", category:"shorts" ,precio: 3 + "$", descripcion:"short clasico naranja talla unica"},
    ];

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detalleId } = useParams();

useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(allProducts);
        }, 2000);
    });
    getData.then(res => setData(res.find(remera => remera.id === parseInt(detalleId))));
    }, [])


return (
<ItemDetail data={data}/>

);}

export default ItemDetailContainer