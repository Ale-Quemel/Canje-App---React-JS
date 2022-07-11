import { useEffect, useState } from 'react';
import { getProduct } from '../../asynmock';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getProduct().then(resolve => setProducts(resolve))
    }, []);

    return (
        <div className='div__ctn___cards'>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;