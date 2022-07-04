
import { useState } from "react";
import './ItemCount.css'

function ItemCount({stock}) {
    const [count, setCount] = useState(0);

    function increment () {
        if(count < stock) {
            setCount(count + 1);
        }
    }

    function decrement () {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    function onAdd () {
        alert('¡Agregaste ' + count + ' producto(s) a tu carrito!')
    }

    return(
        <div className="countButton">
            <button className="buttons" onClick={decrement}>-</button>
            <h1>{count}</h1>
            <button className="buttons" onClick={increment}>+</button>
            <button className="buttons Add" onClick={onAdd}>Añadir</button>
            
        </div>
    
        
    ) 
}



export default ItemCount