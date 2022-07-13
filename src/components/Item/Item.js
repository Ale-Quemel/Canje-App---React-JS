import React from "react";
import './Item.css';
import { Link } from 'react-router-dom';


 
const Item = ({id, name, image, alt, description, price, stock}) => {
    return (
            <div className="ctn__card">
                <img alt={alt} className="ctn__card__img" src={image}/>
                <h2 className="ctn__card__title">{name}</h2>
                <h3 className="ctn__card__dscp">{description}</h3>
                <p>${price}</p>
                <Link to={`/detail/${id}`} className="detail__btn">Ver detalle</Link>
            </div>
       
    )
}

export default Item;