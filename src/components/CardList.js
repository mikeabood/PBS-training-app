import React from 'react'; 
import Card from './Card'; 

const CardList = ({ drinks }) => {
	// *** ERROR BOUNDARY
	// if (true) {
	// 	throw new Error('NOOOO!'); 
	// }
	return ( 
		<div>
			{
			  drinks.map((user, i )=> {
				return (
					<Card 
						key={drinks[i].id} 
						id={drinks[i].id} 
						name={drinks[i].name} 
						garnish={drinks[i].garnish}
						glass={drinks[i].glass}
						url={drinks[i].url}
						ingred={drinks[i].ingred}
						desc={drinks[i].desc}
						/>
			  		);
				})
			}
		</div>
	);
}

export default CardList;