import React from "react";
import inactiveStar from '../../images/etoile_inactive.png';
import activeStar from '../../images/etoile_active.png';

export default function Rate({ star }) {
	const stars = [1, 2, 3, 4, 5];
	return (
		<div>
			{stars.map((index) =>
				star >= index ? (
					<img
						key={index.toString()}
						className="star"
						src={activeStar}
						alt="rating star"
					/>
				) : ( 
					<img
						key={index.toString()}
						className="star"
						src={inactiveStar}
						alt="rating star"
					/>
				)
			)}
		</div>
	);
}
