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
                    <h1>¡Cargando tu producto!</h1>
                    <iframe src="https://giphy.com/embed/wvtt4mtViPOSrLYNFh" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/music-loading-colkie-wvtt4mtViPOSrLYNFh"></a></p>
                </div>
    }

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;
