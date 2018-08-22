import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'; 
import Scroll from '../components/Scroll'; 
import Footer from '../components/Footer'; 
import ErrorBoundary from '../components/ErrorBoundary'; 
import { drinks } from '../drinks'; 
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
		this.setState({ drinks: drinks })

		// *** PLACEHOLDER JSON

		// fetch('https://jsonplaceholder.typicode.com/users')
		// .then(response => response.json()) 
		// .then(users => this.setState({ drinks: users })); 

		// *** ATTEMPT AT PERSONAL JSON SERVER

		// fetch('https://my-json-server.typicode.com/mikeabood/pbs-drinks/drinks')
		// 	.then(response => response.json())
		// 	.then(drinks => {this.setState({ drinks: drinks })}); 
	}

	onSearchChange = (e) => {
		this.setState({ searchfield: e.target.value });  
	}

render() {
		// current state of robots & searchfield
		// destructuring
		const {drinks, searchfield } = this.state; 
		// grab value of current state of 'robots' - return 'name' of 'robot' selected, toLowerCase that 'includes' a current state of the 'searchfield'
		const filteredDrinks = drinks.filter(drink => {
			return drink.name.toLowerCase().includes(searchfield.toLowerCase());
	})
		//turnerary
		return !drinks.length ?
		<h1>Loading..</h1> :

		// if(!drinks.length) {
		// 	return <h1>Loading...</h1>
		// } else {
		// // console.log(filteredDrinks);
		// return (
		(
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
				<Scroll>
				<ErrorBoundary>
				<CardList drinks={filteredDrinks} /> 
				</ErrorBoundary> 
				</Scroll> 
				<Footer /> 
			</div> 

			);
		}
	}

export default App; 