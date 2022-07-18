import './Cart.css'
import ItemCart from '../ItemCart/ItemCart'
import { useContext } from "react"
import CartContext from "../../CartContext/CartContext"



const Cart = () => {

    const { removeAllItem } = useContext(CartContext)

    return(
        <div>
            <h1 className='cart__title'>Carrito de Compras</h1>
            <ItemCart/>
            <button className='btn__clean' onClick={removeAllItem}>VACIAR CARRITO</button>

        </div>

    )
}

export default Cart