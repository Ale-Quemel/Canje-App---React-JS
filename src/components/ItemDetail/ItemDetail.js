
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../CartContext/CartContext';

const ItemDetail = ({id, name, detail, description, image, alt, price, stock}) => {
    
    const [quantity, setQuantity] = useState(0)

    const { addItem, getProduct } = useContext(CartContext)


    const onAdd = (quantity) => {
        console.log('Agregaste al carrito');
        console.log(quantity);
        setQuantity(quantity)

        addItem({id, name, price, quantity})
     
    }  

    return(
        <div className="ctn__detail ">
            <img className="ctn__detail__img"src={image} alt={alt} />
            <h2 className="ctn__detail__title">{name}</h2>
            <h3 className="ctn__detail__dsc">{description}</h3>
            <h4 className="ctn__detail__espx">{detail}</h4> 
            <h5>${price}</h5>
            
            { quantity > 0 ? <div><Link className='cart__btn1' to='/cart'>Ir a Carrito</Link><Link to='/' className='cart__btn2'>Seguir Comprando</Link></div> : <ItemCount stock={stock} onConfirm={onAdd} initial={getProduct(id)?.quantity}/>}


        </div>


    )
}
    
export default ItemDetail;
