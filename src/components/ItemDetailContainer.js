import react, { useState,useEffect } from "react";
import ItemDetail from "./ItemDetail";
import "./NavBar.css";
import remeraRoja from "./imagenes/remera/PNG/remeraRoja.png";

const Product = {id: 1, imagen:remeraRoja, title:"Red T-shirt", precio: 2 + "$", descripcion:"Remera clasica roja talla unica"};

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(Product);
        }, 2000);
    });
    getData.then(res => setData(res));
    },[])


return (
<ItemDetail data={data}/>

);}

export default ItemDetailContainer