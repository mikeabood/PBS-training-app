import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card'; 
import CardList from './CardList'; 
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; 
import { drinks } from './drinks'; 

ReactDOM.render(
			<CardList drinks={drinks}/>
, document.getElementById('root'));
registerServiceWorker();
