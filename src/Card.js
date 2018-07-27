import React from 'react';

const Drink = ({ name, url, garnish, glass, ingreds, desc }) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			{/*<h1>Old Fashioned</h1>*/} 
			<img alt="pic placeholder" height="200px" width="200px" src={`${url}`} />
			<div>
				<h2>{name}</h2>
				<p>Garnish: {garnish}</p>
				<p>Glass: {glass}</p>
				{/*<p>{ingreds[i]}</p> */}
			</div>
		</div> 
		);
}

// https://cdn.liquor.com/wp-content/uploads/2018/05/08113350/bourbon-old-fashioned-720x720-recipe.jpg

export default Drink; 