import React from 'react'



class AsteroidCard extends React.Component{



	render(){
		return(<div>

		 		Name: {this.props.name}
		 		<p>Hazardous: {this.props.hazardous.toString()}</p>
		 		<a href={this.props.url}>NASA URL</a>
		 		<p>Miss Distance(mile): {this.props.miss_distance}</p>
		 		<p>Approach Date: {this.props.approach_date}</p>
		 		<p>Relative Velocity(mph): {this.props.relative_velocity}</p>
		 		<p>Min est range(feet): {this.props.est_diameter_min}</p>
		 		<p>Max est range(feet): {this.props.est_diameter_max}</p>
		 	   </div>)
	}
}

export default AsteroidCard