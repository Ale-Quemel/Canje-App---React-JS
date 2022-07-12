
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
      <div className="App">
          {/* <NavBar/>
          <div className='div__ctn__cards'>
            <ItemListContainer/>
          </div>
          <ItemDetailContainer/> */}
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='*' element={<h1>PAGE NOT FOUND</h1>}/>
            </Routes>
          </BrowserRouter>

      </div>
    
  );
}

export default App;
