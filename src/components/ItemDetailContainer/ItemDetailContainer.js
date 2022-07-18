import './ItemDetailContainer.css'
import { useEffect, useState } from "react";
import { getProductsById } from "../../asynmock";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'

const  ItemDetailContainer = () => {
    
    const [product, setProduct] = useState()

    const [loading, setLoading] = useState(true)

    
    const { productId } = useParams()
    
    
    useEffect(() => {
        getProductsById(productId).then(resolve => {
            setProduct(resolve)
        }).finally(() => {
            setLoading(false)
        })
    },  [productId])

    if(loading) {
        return <div>
                    <h1 className='load__title'>¡Cargando tu producto!</h1>
                    <img className='load__gif' alt='cargando-producto' src='../images/70.gif'/>
                </div>
    }

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;
