import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card'; 
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; 
import { drinks } from './drinks'; 

ReactDOM.render(
				<div>
					<Card id={drinks[0].id} name={drinks[0].name} garnish={drinks[0].garnish}/>
					<Card id={drinks[1].id} name={drinks[1].name} garnish={drinks[1].garnish}/>
					<Card id={drinks[0].id} name={drinks[0].name} garnish={drinks[0].garnish}/>
				</div>
		, document.getElementById('root'));
registerServiceWorker();
