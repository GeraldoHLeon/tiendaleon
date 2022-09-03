import './App.css';
import MenuNavegacion from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';
import Cart from "./components/Cart";


function App() {
  return ( 
    <>
    <BrowserRouter>
      <MenuNavegacion/>
      <Routes>
        <Route path='/' element={<ItemListContainer titulo="Welcome to the firts pixel clothing store"/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer titulo="¡choose what you want!"/>}/>

      </Routes>
     </BrowserRouter>
     </>
  );
}

export default App;