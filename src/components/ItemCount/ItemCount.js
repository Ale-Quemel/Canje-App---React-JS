
import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({onConfirm, stock, initial = 0}) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if(count < stock) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    /* const onAdd = (count) => {
        console.log('Agregaste al carrito');
        console.log(count);
    
     
    }  */

    return(
        <div>
            <div className="countButton">
                <button className="buttons" onClick={decrement}>-</button>
                <h1>{count}</h1>
                <button className="buttons" onClick={increment}>+</button>
            </div>
    
            <div className="addButton">
                <button onClick={() => onConfirm(count)}>Añadir al carrito</button>
            </div>
            
        </div>
    
        
    ) 
}



export default ItemCount