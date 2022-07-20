import './Cart.css'
import ItemCart from '../ItemCart/ItemCart'
import { useCart } from "../../CartContext/CartContext"
import { Link } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import { db  } from '../../services/Firebase'
import ItemForm from '../ItemForm/ItemForm'

const Cart = () => {


    const { cart, removeAllItem, totalProductsAdded, totalToPay } = useCart()

    const createOrder = () => {
        console.log(('Crear Orden de Comprasss'));

        const objOrder = {
            buyer: {
                name: 'Ale',
                lastName: 'Quemel',
                email: 'alequemel@gmail.com.ar',
                phone: '4455354510',
                home: '68 n°61'
            },
            items: cart,
            total: totalToPay
        }

        console.log(objOrder);

        const collectionRef = collection(db, 'orders')

        addDoc(collectionRef, objOrder).then(({id}) => {
            console.log(`SE HA CREADO LA ORDEN CON EL ID: ${id}`);

        })


    }



    if(!totalProductsAdded) {
        return (
            <div>
                <h3 className='cart__title'>¡Ups... tu carrito está vacio!</h3>
                <Link className='btn__clean' to='/'>¡Seguir comprando!</Link>
            </div>
        )
                
    }

    return(
        <div>
            <h1 className='cart__title'>Carrito de Compras</h1>
            <ItemCart/>    
            <h2>Total: ${totalToPay}</h2>
            <button className='btn__clean' onClick={removeAllItem}>VACIAR CARRITO</button>
            <ItemForm/>
            <button onClick={createOrder} className='btn__clean2'>CREAR ORDEN DE COMPRA</button>
        </div>

    )
}

export default Cart