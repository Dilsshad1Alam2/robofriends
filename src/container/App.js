import React, { Component } from 'react';
import RobotList  from '../components/RobotList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'


class App extends Component{
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield:''
		}
	}
	componentDidMount(){
	fetch('http://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users=>this.setState({robots : users}))
	}
	onSearchChange = (event) =>{
		this.setState({ searchfield: event.target.value})
	}
	
	render(){
		const filteredRobots = this.state.robots.filter(robots => {
		 	return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
	})

		if (!this.state.robots.length) {
			return <h1 className="tc" > Loading </h1>
		}
		else{
		return(
		<div className="tc">
		<h1> ROBOFRIENDS </h1>
		<SearchBox searchChange = { this.onSearchChange }/>
		<Scroll>
		<RobotList robots = { filteredRobots }/>
		</Scroll>
		</div>
		 );
		}

	}

}
export default App;
