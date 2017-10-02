import React from 'react'
import StackGrid from "react-stack-grid"


class HomepageCard extends React.Component {

	style = {
		height: "150px",
		width: "150px"
	}


	render () {
		return (
			<div>
				<img style={this.style} src={this.props.img}/>
				{ localStorage.getItem('jwtToken') ? <button data-id={this.props.imgId} onClick={this.props.handleUnlike}>Unlike</button> : null}			
			</div>)
	}

}	

export default HomepageCard