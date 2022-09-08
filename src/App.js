import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from "./components/Cart";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import MenuNavegacion from './components/NavBar';
import CartProvider from './CartContext';


function App() {
  return (
    <>
    <BrowserRouter>
      <CartProvider>
      <MenuNavegacion/>
      <Routes>
        <Route path='/' element={<ItemListContainer titulo="Welcome to the firts pixel clothing store"/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer titulo="¡choose what you want!"/>}/>
      </Routes>
      </CartProvider>
     </BrowserRouter>
     </>
  );
}

export default App;