import './header.scss'
import Logo from '../../images/logo.png'
import Navbar from '../navbar/Navbar'

export default function Header() {
	return (
		<header className='header'>
			<h1>
				<img src={Logo} alt="kasa, location d'appartements" />
			</h1>
			<Navbar />
		</header>
	)
}
