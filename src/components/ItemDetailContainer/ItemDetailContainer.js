import { useEffect, useState } from "react";
import { getProductsById } from "../../asynmock";
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer'

const  ItemDetailContainer = () => {
    
    const [product, setProduct] = useState()
    
    useEffect(() => {
        getProductsById('1').then(resolve => {
            setProduct(resolve)
        })
    },  [])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail title={product?.name} detail={product?.detail}/>
        </div>
    )
}

export default ItemDetailContainer;
