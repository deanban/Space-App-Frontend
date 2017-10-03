import React from 'react'
import StackGrid from "react-stack-grid"


class displayCard extends React.Component {

	state = {
		liked: ''
	}

	style = {
		height: "150px",
		width: "150px"
	}

	componentDidMount() {
		this.setState({
			liked: this.props.liked
		})
	}

	showButton = () => {
		if (localStorage.getItem('jwtToken')) {
			return this.props.liked ? <button data-id={this.props.userid} id={this.props.id} onClick={this.props.handleUnlike}>Unlike</button> : <button data-id={this.props.userid} id={this.props.id} onClick={this.props.handleLike}>Like</button>
		}
	}

	render () {
		{console.log('render displaycard')}

		return (

			<div id={this.props.id}>
				<img style={this.style} src={this.props.img}/>
				{this.showButton()}
			</div>)
	}

}

export default displayCard
