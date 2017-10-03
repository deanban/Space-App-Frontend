import React from 'react'
import AsteroidCard from './AsteroidCard'
import StackGrid from "react-stack-grid"


class AsteroidContainer extends React.Component{

	state = {
		data: []
	}


	componentDidMount(){
		fetch("http://localhost:3000/asteroids")
			.then( resp => resp.json() )
			.then( resp => this.setState({
				data: resp
			}))
	}

	render(){
		return( <div>
					<StackGrid columnWidth={180}>
						{this.state.data.map(element => <AsteroidCard 
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
					</StackGrid>
				</div>)
	}
}


export default AsteroidContainer