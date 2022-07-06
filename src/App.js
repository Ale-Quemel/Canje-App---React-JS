
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <body className='body__ctn'>
      <div className="App">
          <NavBar/>
          <ItemListContainer/>

      </div>
    </body>
  );
}

export default App;
