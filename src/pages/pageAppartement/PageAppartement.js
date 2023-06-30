import './pageAppartementcss.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import datas from '../../data/datas'
import Header from "../../components/header/Header";
import Carousel from "../../components/carousel/Carousel"
import Footer from "../../components/footer/Footer";
import Collapse from '../../components/collapse/Collapse';
import inactiveStar from '../../images/etoile_inactive.png';
import activeStar from '../../images/etoile_active.png';


export default function PageAppartement() {
	
	const [imageSlider, setImageSlider] = useState([]);

	const idAppartement = useParams('id').id;
	const dataCurrentAppartement = datas.filter(data => data.id === idAppartement);
	
	useEffect(() => {
		const dataCurrentAppartement = datas.filter(data => data.id === idAppartement);
		setImageSlider(dataCurrentAppartement[0].pictures);
	}, [idAppartement]);

	const name = dataCurrentAppartement[0].host.name; 
	const rating = dataCurrentAppartement[0].rating;
	const description  = dataCurrentAppartement[0].description;
	const equipments = dataCurrentAppartement[0].equipments;

	return (
		<>
			<Header/>
			<Carousel imageSlider={imageSlider}/>
			<main className="appartement">
				<div className="appartement_content">
					<div className="appartement_content_infos">
						<h1>{dataCurrentAppartement[0].title}</h1>
						<p>{dataCurrentAppartement[0].location}</p>
						<div>
							{dataCurrentAppartement[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className="appartement_content_host">
						<div>
							<div className='appartement_content_host_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={dataCurrentAppartement[0].host.picture} alt="host of this appartement" />
						</div>
							
						<div className="appartement_content_host_stars">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? activeStar : inactiveStar} alt="star" />
								)
							})}
						</div>
					</div>
				</div>
				<div className="appartement_list">
					<div className="appartement_list_item">
						<Collapse title={'Description'} content={description} />	
					</div>
					<div className="appartement_list_item">
						<Collapse title={'Équipements'} content={equipments}/>
					</div>	
				</div>
			</main>
			<Footer/>
		</>
	)
}
