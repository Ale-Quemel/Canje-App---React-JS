

import React from 'react';
import { useForm } from 'react-hook-form';
import './ItemForm.css'

const ItemForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <section>
        <div className="itemForm__div">
          <h2>¡Antes de confirmar la orden de compras, completa el formulario!</h2>
          <p>Los siguientes datos se almacenan para brindarte la mayor seguridad en tu compra y que el producto llegue a tus manos lo antes posible.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="itemForm">
            <p className="item__p">
                <span><label className="item__label">Nombre: </label></span>
                <input className="item__input" type="text" placeholder="Nombre..." {...register("Nombre", {required: true, maxLength: 80})} />
            </p>
            <p className="item__p">
                <span><label className="item__label">Apellido: </label></span>
                <input className="item__input" type="text" placeholder="Apellido..." {...register("Apellido", {required: true, maxLength: 100})} />
            </p>
            <p className="item__p">
                <span><label className="item__label">Domicilio: </label></span>
                <input className="item__input" type="home" placeholder="Domicilio de entrega..." {...register("Domicilio", {required: true, maxLength: 100})} />
            </p>
            <p className="item__p">
                <span><label className="item__label">Email: </label></span>
                <input className="item__input" type="text" placeholder="Email..." {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
            </p>
            <p className="item__p">
                <span><label className="item__label">Teléfono: </label></span>
                <input className="item__input" type="tel" placeholder="Número de teléfono..." {...register("Teléfono", {required: true, minLength: 6, maxLength: 12})} />
            </p>

          <input className="item__btn" type="submit" value={"Confirmar Datos"} />
        </form>

    </section>
  );
}



export default ItemForm