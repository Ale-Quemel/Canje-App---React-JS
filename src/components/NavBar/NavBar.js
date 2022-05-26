import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import '../CartWidget/CartWidget.css'
const NavBar = () => {
    return (
        <nav className="NavBar">
            <div>
                <h2>Canje App</h2>
            </div>
            <ul className="NavBar__list">
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                <a href="">Ofertas</a>
                </li>
                <li>
                <a href="">Productos</a>
                </li>
                <li>
                <a href="">Servicios</a>
                </li>
                <li>
                <a href="">Mi perfil</a>
                </li>
                <li>
                <CartWidget/>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar