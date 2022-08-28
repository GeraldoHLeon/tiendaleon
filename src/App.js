import './App.css';
import MenuNavegacion from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
// import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MenuNavegacion/>
      <ItemDetailContainer/>
      {/* <ItemListContainer titulo="COMMING SOON..."></ItemListContainer> */}
       </header>
    </div>
  );
}

export default App;