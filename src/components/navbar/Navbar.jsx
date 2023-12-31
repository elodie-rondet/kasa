import './navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const currentRoute = window.location.pathname;

    return (
        <nav className='nav'>
            <ul className='nav_list'>
                <li className={currentRoute === '/accueil/' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <Link  to='/accueil/'>
                   
                        Accueil
                    </Link>
                </li>
                <li className={currentRoute === '/apropos' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <Link  to='/apropos'>
                        A propos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
