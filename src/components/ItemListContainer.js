import "./NavBar.css";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ titulo }) => {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "productos");
    if (categoriaId) {
      const queryFilter = query(
        queryCollection,
        where("category", "==", categoriaId)
      );
      getDocs(queryFilter).then((res) =>
        setData(
          res.docs.map((productos) => ({
            id: productos.id,
            ...productos.data(),
          }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(
          res.docs.map((productos) => ({
            id: productos.id,
            ...productos.data(),
          }))
        )
      );
    }
  }, [categoriaId]);

  return (
    <>
      <div id="primeraSeccion">
        <p id="textoPrimeraSeccion">{titulo}</p>
        <div className="catalogo">
          <ItemList data={data} />
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
