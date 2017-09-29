import React from 'react'
import StackGrid from "react-stack-grid"

class HomepageContainer extends React.Component {

	state = {
		favImages: []
	}

	componentDidMount() {
		console.log('mounted', this.props)
		if (this.props.userId) {
			fetch(`http://localhost:3000/users/${this.props.userId}`)
			.then(resp => resp.json())
			.then(res => {debugger})
			.then(img => this.setState({
				favImages: img
			}))
		}
		
	}

	render() {
		return (
			<div>
				
			</div>
		)
	}

}

export default HomepageContainer