import { useState } from "react";
import './ItemCount.css'

const ItemCount = () => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        setCount((count) => count -1)
    }

    const increment = () => {
        setCount(count + 1)
    }

    return(
        <div className="countButton">
            <button className="buttons" onClick={decrement}>-</button>
            <h1>{count}</h1>
            <button className="buttons" onClick={increment}>+</button>

        </div>
    )
}

export default ItemCount