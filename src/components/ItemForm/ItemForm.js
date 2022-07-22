

import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../CartContext/CartContext';

import './ItemForm.css'

const ItemForm = () => {
      const navigate = useNavigate();
      console.log(navigate);
      const [disabled, setDisabled] = useState(true);
      const [values, setValues] = useState({
        name:"",
        lastname:"",
        address:"",
        email:"",
        phone:""
      });

      const {name, lastname, address, email, phone} = values;
      const {order, setOrder} = useCart();

      const handleChange = (e) => {
        setValues({
          ...values,
          [e.target.name]:e.target.value
        })
      
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        setOrder(values);
        navigate("/confirmar-order")
      }

      const validateFields = () => 
        name !== "" && 
        lastname !== "" && 
        address !== "" && 
        email !== "" && 
        phone !== ""
        ? setDisabled(false)
        : setDisabled(true);

        useEffect(() => {
          validateFields();
        }, [name, lastname, address, email, phone])
        
        


  
  return (
    <section>
        <div className="itemForm__div">
          <h2>¡Antes de confirmar la orden de compras, completa el formulario!</h2>
          <p>Los siguientes datos se almacenan para brindarte la mayor seguridad en tu compra y que el producto llegue a tus manos lo antes posible.</p>
        </div>

        <form onSubmit={handleSubmit} className="itemForm">
            <p className="item__p">
                <span><label className="item__label">Nombre: </label></span>
                <input onChange={handleChange} value={name} name="name" className="item__input" type="text" placeholder="Nombre..." required />
            </p>
            <p className="item__p">
                <span><label className="item__label">Apellido: </label></span>
                <input onChange={handleChange} value={lastname} name="lastname" className="item__input" type="text" placeholder="Apellido..." required />
            </p>
            <p className="item__p">
                <span><label className="item__label">Domicilio: </label></span>
                <input onChange={handleChange} value={address} name="address" className="item__input" type="text" placeholder="Domicilio de entrega..." required />
            </p>
            <p className="item__p">
                <span><label className="item__label">Email: </label></span>
                <input onChange={handleChange} value={email} name="email" className="item__input" type="email" placeholder="Email..." required />
            </p>
            <p className="item__p">
                <span><label className="item__label">Teléfono: </label></span>
                <input onChange={handleChange} value={phone} name="phone" className="item__input" type="number" placeholder="Número de teléfono..." min={10} required />
            </p>
          <button type='submit' disabled={disabled} className='btn__clean2'>CONFIRMAR DATOS</button>
          {/* <input className="item__btn" type="submit" value={"Crear Orden de Compras"} /> */}
        </form>

    </section>
  );
}



export default ItemForm