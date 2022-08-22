import './App.css';
import MenuNavegacion from './components/NavBar';
import pronto from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MenuNavegacion></MenuNavegacion>
    <pronto texto="cooming soon"></pronto>
       </header>
    </div>
  );
}

export default App;