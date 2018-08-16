import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'; 
import Footer from './Footer'; 
// import { drinks } from './drinks'; 
import './App.css'; 


class App extends Component {
	constructor() {
		super()
		this.state = {
			drinks: [],
			searchfield: ''
		} 
	}

	componentDidMount() {
		fetch('https://my-json-server.typicode.com/mikeabood/pbs-drinks/drinks')
			.then(response=> response.json())
			.then(drinks => this.setState({ drinks: drinks}));
	}

	onSearchChange = (e) => {
		this.setState({ searchfield: e.target.value });  
	}

	render() {
		const filteredDrinks = this.state.drinks.filter(drink =>{
			return drink.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if(this.state.drinks === 0) {
			return <h1>Loading...</h1>
		} else {
		// console.log(filteredDrinks);
		return (
			<div className='tc'>
				<img 
				alt="logo"
				className='tl' 
				height="150px" 
				width="150px" 
				src="https://uploads.poachedjobs.com/wp-content/uploads/2017/05/08165621/Main-Logo-300x300.png" 
				/> 
				<h1 className='f1'>PBS Drink Menu</h1> 
				<SearchBox searchChange={this.onSearchChange}/> 
				<CardList drinks={filteredDrinks} /> 
				<Footer /> 
			</div> 

			);
		}
	}
}

export default App; 