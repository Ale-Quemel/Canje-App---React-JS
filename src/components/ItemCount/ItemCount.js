
import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({onConfirm, stock, initial = 1}) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }


    return(
        <div>
            <div className="countButton">
                <button className="buttons" onClick={decrement}>-</button>
                <h1>{quantity}</h1>
                <button className="buttons" onClick={increment}>+</button>
            </div>
    
            <div className="addButton">
                <button onClick={() => onConfirm(quantity)}>Añadir al carrito</button>
            </div>
            
        </div>
    
        
    ) 
}



export default ItemCount