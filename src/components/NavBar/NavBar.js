import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import '../CartWidget/CartWidget.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <nav className="NavBar">
            <div> 
                <Link to='/' className='NavBar__title'>
                    <h2>CanjeApp</h2>
                </Link>    
            </div>
            <ul className="NavBar__list">
                <li>
                    <Link to='/category/hogar'>Hogar</Link>
                </li>
                <li>
                    <Link to='/category/decoart'>DecoArt</Link>
                </li>
                <li>
                    <Link to='/category/tecnologia'>Tecnología</Link>
                </li>
                <li>
                    <Link to='/category/deportes'>Deportes</Link>
                </li>
                <li>
                <CartWidget/>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar