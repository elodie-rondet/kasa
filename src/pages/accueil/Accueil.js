import './accueil.scss'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Gallery from '../../components/gallery/Gallery'
import Footer from '../../components/footer/Footer'

export default function Accueil() {
	return (
		<div className='accueil'>
			<Header />
			<Banner />
			<Gallery />
			<Footer />
		</div>
	)
}
