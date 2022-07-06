import { useEffect, useState } from 'react';
import customFetch from '../Products/CustomFetch';
import products from '../Products/products';
import ItemList from '../ItemList/ItemList';
function ItemListContainer() {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        customFetch(2000, products)
        .then(resolve => setItems(resolve))
    }, [items]);

    return (
        <div>
            <ItemList products={items}/>
        </div>
    )
}

export default ItemListContainer;