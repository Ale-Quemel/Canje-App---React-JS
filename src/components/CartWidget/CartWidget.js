import './CartWidget.css'
import { useCart } from "../../CartContext/CartContext"
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { getQuantity } = useCart ()

    const quantity = getQuantity()

    return (
        <Link  to='/cart' >
            <div className='cartWidget'> 
                <img src='../images/cart.svg' alt='carro-de-compras' className="cart-icon"/>
                { quantity }
            </div>
        </Link>
    )
}

export default CartWidget