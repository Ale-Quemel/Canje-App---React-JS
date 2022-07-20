
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './CartContext/CartContext';
import Cart from './components/Cart/Cart';
import CartOrder from './components/CartOrder/CartOrder';
import { Navigate } from 'react-router-dom';
import ItemForm from './components/ItemForm/ItemForm';


const App = () => {
  return (
      <div className="App">
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/cart' element={<Cart />}/>
              <Route path='*' element={<Navigate to='/'/>}/>
              <Route path='/orders' element={<CartOrder/>}/>
              <Route path='/login' element={<ItemForm/>}/>
            </Routes>
          </BrowserRouter>
        </CartContextProvider>

      </div>
    
  );
}

export default App;
