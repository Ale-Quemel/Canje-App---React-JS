import './Cart.css'
import ItemCart from '../ItemCart/ItemCart'
import { useCart } from "../../CartContext/CartContext"
import { Link } from 'react-router-dom'



const Cart = () => {


    const { removeAllItem, totalProductsAdded, totalToPay } = useCart()

    if(!totalProductsAdded) {
        return (
            <div>
                <h3 className='cart__title'>¡Ups... tu carrito está vacio!</h3>
                <Link className='btn__clean' to='/'>¡Seguir comprando!</Link>
            </div>
        )
                
    }

    return(
        <div>
            <h1 className='cart__title'>Carrito de Compras</h1>
            <ItemCart/>    
            <h2>Total: ${totalToPay}</h2>
            <button className='btn__clean' onClick={removeAllItem}>VACIAR CARRITO</button>
            <Link className='btn__clean2' to='/orders'>CREAR ORDEN DE COMPRA</Link>
        </div>

    )
}

export default Cart