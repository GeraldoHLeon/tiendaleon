import "./NavBar.css";
// import react from "react";
import Item from "./Item";

const ItemList = ({ data = [] }) => {
  return data.map((allProducts) => (
    <Item key={allProducts.id} info={allProducts} />
  ));
};

export default ItemList;
