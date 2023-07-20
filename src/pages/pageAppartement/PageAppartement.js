import './pageAppartementcss.scss'
import { useEffect, useState } from "react"
import { useParams, user } from "react-router-dom";
import datas from '../../data/datas'
import Header from "../../components/header/Header";
import Carousel from "../../components/carousel/Carousel"
import Footer from "../../components/footer/Footer";
import Collapse from '../../components/collapse/Collapse';
import { useLocation } from 'react-router-dom';
import Rating from "../../components/rating/Rating";



export default function PageAppartement() {
	
	const [imageSlider, setImageSlider] = useState([]);

	const idAppartement = useParams('id').id;
	const dataCurrentAppartement = datas.filter(data => data.id === idAppartement);
	if (dataCurrentAppartement.length === 0) {
		window.location.pathname = "/404";
	}
	useEffect(() => {
		const dataCurrentAppartement = datas.filter(data => data.id === idAppartement);
		setImageSlider(dataCurrentAppartement[0].pictures);
	}, [idAppartement]);
	const name = dataCurrentAppartement[0].host.name.split(' '); 
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
							{dataCurrentAppartement[0].tags.map((tag) => {
								return (
									<button key={tag}>{tag}</button>
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
						<Rating star={dataCurrentAppartement[0].rating} />
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

