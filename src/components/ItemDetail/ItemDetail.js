
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({name, detail, description, image, alt, price, stock}) => {
    
    const [quantity, setQuantity] = useState(0)

    const onAdd = (count) => {
        console.log('Agregaste al carrito');
        console.log(count);
        setQuantity(count)
     
    }  

    return(
        <div className="ctn__detail ">
            <img className="ctn__detail__img"src={image} alt={alt} />
            <h2 className="ctn__detail__title">{name}</h2>
            <h3 className="ctn__detail__dsc">{description}</h3>
            <h4 className="ctn__detail__espx">{detail}</h4> 
            <h5>${price}</h5>
            
            { quantity > 0 ? <Link className='cart__btn' to='/cart'>Ir a Carrito</Link> : <ItemCount stock={stock} onConfirm={onAdd}/>}

        </div>


    )
}
    
export default ItemDetail;
