import React, { Component } from 'react';
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

	onSearchChange = (e) => {
		this.setState({ searchfield: e.target.value });  
	}

	render() {
		const filteredDrinks = this.state.drinks.filter(drink =>{
			return drink.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		// console.log(filteredDrinks);
		return (
			<div className='tc'>
				<h1>PBS Drink Menu</h1> 
				<SearchBox searchChange={this.onSearchChange}/> 
				<CardList drinks={filteredDrinks} /> 
				<Footer /> 
			</div> 

		);
	}
}

export default App; 