import '../CardTwo/CardTwo.css'

const Card_2 = () => {
    return (
        <div className='ctn__cardTwo'>
            <img className='ctn__cardTwo__img' src='./images/bike.jpg' alt='bicicleta-de-paseo'/>
            <h3 className='ctn__cardTwo__title'>BICICLETA</h3>
            <p className='ctn__cardTwo__dscp'>
                Bicicleta de paseo, rodado 26.
            </p>
            <p className='ctn__cardTwo__price'>Precio: $9500</p>

            <div>
                <button>Favoritos</button>
            </div>
            <div>
                <button>Agregar a Carrito</button>
            </div>
        </div>
    )
}

export default Card_2