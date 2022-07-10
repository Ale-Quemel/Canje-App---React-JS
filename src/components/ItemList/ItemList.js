import React from "react";
import Item from "../Item/Item";

function ItemList ({products}) {
    return (
        products.map(p => (
            <Item
            key={p.id}
            name={p.name}
            image={p.image}
            alt={p.alt}
            description={p.description}
            detail={p.detail}
            price={p.price}
            stock={p.stock}
            />
        )
    )
    )
}

export default ItemList;