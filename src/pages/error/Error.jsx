import './error.scss'
import { Link } from 'react-router-dom'
import Header from "../../components/header/Header";
export default function Error() {

	return (
		<div className="error">
		<Header />
		<div className="error_infos">
		 <h1 className="error_infos_title">404</h1>
		 <p className="error_infos_content">La page que vous avez demandé n'existe pas</p>
		<Link to={`/accueil`}>
			<p className="error_infos_lien">Retourner sur la page d'accueil</p>
		</Link>
		</div>
		</div>
	)
}
