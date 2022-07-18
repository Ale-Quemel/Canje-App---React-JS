import React from "react";
import './ItemCart.css'
import { useCart } from "../../CartContext/CartContext"

const ItemCart = () => {

    const { cart, removeItem} = useCart ()

    return (
        
        <div>
            {cart.map(prod => {
                return(
                    <div key={prod.id} className='cartProducts'>
                        <div  className='cartProducts__title'>{prod.name} </div>
                        <div> Cantidad: {prod.quantity} </div>
                        <div> Precio: ${prod.price} </div>
                        <div> Subtotal: ${prod.price * prod.quantity}</div>
                        <button className="btn__remove" onClick={() => removeItem(prod.id)}>Borrar</button>
                        
                    </div>
                )})
            }
        </div>
    )
}

export default ItemCart