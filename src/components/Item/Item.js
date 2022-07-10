import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './Item.css'


 
function Item({id, name, image, alt, description, price, stock}) {
    return (
            <div className="ctn__card" key={id} style={{ width: '18rem' }}>
                <img alt={alt} className="ctn__card__img" src={image}/>
                <body>
                    <h2 className="ctn__card__title">{name}</h2>
                    <p className="ctn__card__dscp">{description}</p>
                    <p>${price}</p>
                    <ItemCount className="buttons" stock={stock}/>
                </body>
            </div>
       
    )
}

export default Item;