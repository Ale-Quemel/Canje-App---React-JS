import './ItemDetailContainer'
import { useEffect, useState } from "react";
import { getProductsById } from "../../asynmock";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'

const  ItemDetailContainer = () => {
    
    const [product, setProduct] = useState()
    
    const { productId } = useParams()
    
    
    useEffect(() => {
        getProductsById(productId).then(resolve => {
            setProduct(resolve)
        })
    },  [])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;
