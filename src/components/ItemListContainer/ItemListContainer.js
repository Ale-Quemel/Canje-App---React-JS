import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import {useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/Firebase';



const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    
    useEffect(() => {

        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(collectionRef).then(response =>{
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
       
    }, [categoryId]);

    if(loading) {
        return <div>
                    <h1 className='load__title'>¡Cargando productos!</h1>
                    <img className='load__gif' alt='cargando-producto' src='../images/70.gif'/>
                </div>
    }

    return (
        <div className='div__ctn___cards'>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;