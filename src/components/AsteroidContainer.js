import React from 'react'
import AsteroidCard from './AsteroidCard'


class AsteroidContainer extends React.Component{

	state = {
		data: [],
		filteredStr: 'all',
		sortSize: ''
	}


	componentDidMount(){
		fetch("http://localhost:3000/asteroids")
			.then( resp => resp.json() )
			.then( respData => this.setState({
				data: respData
			}))
	}


	handleChange = (event) =>{
		// let haz = this.filterByHazard(event.target.value)
		this.setState({
			filteredStr: event.target.value
		})

		console.log(event.target.value)
		
	}

	handleSortChange = (event) => {
		this.setState({
			sortSize: event.target.value
		})

		console.log(event.target.value)

		
	}

	filterByHazard = () => {
		let newData = this.sortData()
		
		console.log(this.state.data)
		console.log(this.state.data.filter(filterHaz => filterHaz.hazardous.toString() === this.state.filteredStr))
		
		if(this.state.filteredStr === 'all'){
			return newData
		}
		
		return newData.filter(filterHaz => filterHaz.hazardous.toString() === this.state.filteredStr)
		
		
	}

	sortData = () => {

		if (this.state.sortSize === 'asc') {

			let newObj = this.state.data
			
			return newObj.sort(function(a,b) {return a.estimated_diameter_max - b.estimated_diameter_max})
		} 
		else if (this.state.sortSize === 'desc') {
			let newObj = this.state.data
			
			return newObj.sort(function(a,b) {return b.estimated_diameter_max - a.estimated_diameter_max})
		} 
		else {
			return this.state.data
		}		
	}


	selectBox = () =>{
		return(
			<select class="ui dropdown" onChange={this.handleChange}>
				<option value="" disabled selected>Sort by hazardous</option>
				<option value="all">All</option>
	  			<option value="false">False</option>
	  			<option value="true">True</option>
			</select>
			)
	}

	sizeBox = () =>{
		return(
			<select class="ui dropdown" onChange={this.handleSortChange}>
				<option value="" disabled selected>Sort by Maximum size</option>
	  			<option value="asc">Ascending</option>
	  			<option value="desc">Descending</option>
			</select>
			)
	}



	render(){
		return( 
				<div>
					{this.selectBox()}
					{this.sizeBox()}
					<div class="ui cards">

					
						{this.filterByHazard().map(element => <AsteroidCard
							
							filterBy={this.state.filteredStr}
							name = {element.name}
							url = {element.nasa_jpl_url}
							hazardous = {element.hazardous}
							miss_distance = {element.miss_distance}	
							approach_date = {element.close_approach_date}
							est_diameter_min = {element.estimated_diameter_min}
							est_diameter_max = {element.estimated_diameter_max}
							relative_velocity = {element.relative_velocity}
							/>
						)}
				
					</div>
				</div>
			)
	}
}


export default AsteroidContainer