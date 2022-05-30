
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer salute="¡Canjea lo que ya tenes por lo que necesitas!"/>
        <ItemCount/>
    </div>
  );
}

export default App;
