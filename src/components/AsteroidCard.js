import React from 'react'



class AsteroidCard extends React.Component{


	render(){
				
				return(
	  				<div class="card">
	    				<div class="content">
	      					<div class="header">
	      						{this.props.name}
	      					</div>
	  						<div class="meta">
	  							<a href={this.props.url}>More Info.</a>
	  						</div>

									<div class="Hazardous">
										Hazardous: {this.props.hazardous.toString()}
									</div>
									<div class="Miss Distance(mile)">
										Miss Distance(mile): {this.props.miss_distance}
									</div>
									<div class="Approach Date">
										Approach Date: {this.props.approach_date}
									</div>
									<div class="Relative Velocity">
										Relative Velocity(mph): {Math.round(this.props.relative_velocity)}
									</div>
									<div class="Min est range">
										Min est size(feet): {Math.round(this.props.est_diameter_min)}
									</div>
									<div class="Max est range(feet)">
										Max est size(feet): {Math.round(this.props.est_diameter_max)}
									</div>
								</div>
	    				</div>			
	    			
				)
		
		
	}			

}


export default AsteroidCard

