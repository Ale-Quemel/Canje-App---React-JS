import '../CardOne/CardOne.css'

const Card_1 = () => {
    return (
        <div className='ctn__card'>
            
            <img className='ctn__card__img' src='./images/joystick.jpg' alt='joystick-de-consola-playstation'/>
            <h3 className='ctn__card__title'>JOYSTICK</h3>
            <p className='ctn__card__dscp'>Compatible con Ps4 y Ps5.</p>
            <p className='ctn__card__price'>Precio: $7550</p>
            
            <div>
                <button>Favoritos</button>
            </div>
            <div>
                <button>Agregar a Carrito</button>
            </div>
        </div>
    )
}

export default Card_1