
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer salute="¡Canjea lo que ya tenes por lo que necesitas!"/>
    </div>
  );
}

export default App;
