import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import { getProduct, getProductsByCategory, getProductsById } from '../../asynmock';
import ItemList from '../ItemList/ItemList';
import {useParams } from 'react-router-dom'


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams()
    
    useEffect(() => {
        if(!categoryId) {
            getProduct().then(response => {
                setProducts(response)
            })
        } else {
            getProductsByCategory(categoryId).then(response => {
                setProducts(response)
            })
        }
       
    }, [categoryId]);

    return (
        <div className='div__ctn___cards'>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;