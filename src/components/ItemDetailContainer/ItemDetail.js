import React from "react";
import './ItemDetail.css';

function ItemDetail({product}) {

    return (
        product.map(p =>(
           <p>
            {p.detail}
           </p>
            )
        )


    )
}
    
export default ItemDetail;
