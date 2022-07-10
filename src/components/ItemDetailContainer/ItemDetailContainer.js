import { useEffect, useState } from "react";
import { getProductDetail } from "../Products/asynmock";
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    
    useEffect(() => {
        getProductDetail().then(resolve => setProduct(resolve))
    }, [])

    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer;
