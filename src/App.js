import React, { component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'; 
import Footer from './Footer'; 
import { drinks } from './drinks'; 


class App extends Component {
	constructor() {
		super()
		this.state = {
			drinks: drinks,
			searchfield: ''
		}
	}
	render() {
	return (
		<div className='tc'>
		<h1>PBS Drink Menu</h1> 
		<SearchBox /> 
		<CardList drinks={this.state.drinks} /> 
		<Footer /> 
		</div> 

		);
	}
}

export default App; 