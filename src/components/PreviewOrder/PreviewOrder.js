import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import SweetAlert2 from 'react-sweetalert2';
import { useCart } from '../../CartContext/CartContext'
import { db } from '../../services/Firebase';
import Cart from '../Cart/Cart';
import CustomModal from '../CustomModal';


const PreviewOrder = () => {

  const {order, cart} = useCart();

  const [modalProps, setModalProps] = useState({});

  const [show, setShow] = useState(false);

  const createOrder = () => {

    const objOrder = {
        buyer: {
            name: order.name,
            lastName: order.lastname,
            email: order.email,
            phone: order.phone,
            home: order.address
        },
        items: cart,
    }

    const collectionRef = collection(db, 'orders')

    addDoc(collectionRef, objOrder).then(({id}) => {
        
        setShow(true)

        setModalProps({
          title: '¡Gracias por tu compra!',
          body: `Su número de compra es: ${id}`,
          show: show,
          to: '/'
        });
    console.log(id);


    })
    


}

  console.log(cart);

  return (
    <div>
      <h1>Confirmación de Compra</h1>
      <ul>
        <li>{order.name}</li>
        <li>{order.lastname}</li>
        <li>{order.address}</li>
        <li>{order.email}</li>
        <li>{order.name}</li>
      </ul>

      <ul>
        {cart.map(product => (
          <li key={product.id}>
            {product.name}
          </li>
        ))}
      </ul> 
      <button onClick={createOrder} type='button' className='btn__clean2'>CONFIRMAR DATOS</button>
      <CustomModal {...modalProps}/>

    </div>

  )
}

export default PreviewOrder