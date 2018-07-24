import React from 'react';

const Drink = ({ name, garnish }) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			{/*<h1>Old Fashioned</h1>*/} 
			<img alt="this is the pic" height="200px" width="200px" src="https://cdn.liquor.com/wp-content/uploads/2018/05/08113350/bourbon-old-fashioned-720x720-recipe.jpg"
/>
			<div>
				<h2>{name}</h2>
				<p>garnish: {garnish}</p>
			</div>
		</div> 
		);
}
// "https://cdn.liquor.com/wp-content/uploads/2018/05/08113350/bourbon-old-fashioned-720x720-recipe.jpg"

export default Drink; 