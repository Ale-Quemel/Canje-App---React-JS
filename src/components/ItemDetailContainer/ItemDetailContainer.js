import './ItemDetailContainer.css'
import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/Firebase';

const  ItemDetailContainer = () => {
    
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()
    
    useEffect(() => {

        getDoc(doc(db, 'products', productId)).then(response =>{
            const product = {id: response.id, ...response.data()}
            setProduct(product)
        }).catch(error => {
            console.log(error);
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
