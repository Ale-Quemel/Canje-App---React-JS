
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Card_1 from './components/CardOne/CardOne';
import Card_2 from './components/CardTwo/CardTwo'
import Card_3 from './components/CardThree/CardThree'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer salute="¡Canjea lo que ya tenes por lo que necesitas!"/>
        <div className='ctn__cards'>
          <Card_1/>
          <Card_2/>
          <Card_3/>
        </div>
        <ItemCount/>
    </div>
  );
}

export default App;
