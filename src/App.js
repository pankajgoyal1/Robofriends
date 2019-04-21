import React, {Component} from 'react';
import Cardlist from './Cardlist';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';
class App extends Component{
	constructor(){
		super()
		this.state ={
			robots:robots,
			search:''
		}
	}
	onSearchChange=(event)=>{
		this.setState({ search : event.target.value})

    }

	render(){
		const filteredrobots=this.state.robots.filter(robots=>{
		return robots.name.toLowerCase().includes(this.state.search.toLowerCase());
	})
		return(
			<div className='tc'>
			 <h1>RoboFriends</h1>
			 <SearchBox searchChange={this.onSearchChange} />
			 <Scroll>
	    		<Cardlist robots={filteredrobots} />
	    	</Scroll>
			</div> 
	    );
	}
}
export default App;