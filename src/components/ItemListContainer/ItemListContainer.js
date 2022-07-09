import { useEffect, useState } from 'react';
import { customFetch } from '../Products/asynmock';
import { products } from '../Products/asynmock';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'

function ItemListContainer() {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        customFetch(2000, products)
        .then(resolve => setItems(resolve))
    }, [items]);

    return (
        <div className='div__ctn___cards'>
            <ItemList products={items}/>
        </div>
    )
}

export default ItemListContainer;