import '../CardThree/CardThree.css'

const Card_3 = () => {
    return (
        <div className='ctn__cardThree'>
            <img className='ctn__cardThree__img' src='./images/longboard.jpg' alt='longboard-patineta'/>
            <h3 className='ctn__cardThree__title'>LONGBOARD</h3>
            <p className='ctn__cardThree__dscp'>
            Cruisers Retro, insipirado en los 70'.
            </p>
            <p className='ctn__cardThree__price'>Precio: $15400</p>

            <div>
                <button>Favoritos</button>
            </div>
            <div>
                <button>Agregar a Carrito</button>
            </div>
        </div>
    )
}

export default Card_3