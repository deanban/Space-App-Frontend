import React from 'react'
import StackGrid from "react-stack-grid"


class CuriosityCard extends React.Component {

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

	render () {

		return (

			<div id={this.props.id}>
				<img style={this.style} src={this.props.img}/>
				{ !this.state.liked ? <button data-id={this.props.userid} id={this.props.id} onClick={this.props.handleLike}>Like</button> : <button data-id={this.props.userid} id={this.props.id} onClick={this.props.handleLike}>unlike</button>}
			</div>)
	}

}	

export default CuriosityCard

//				{ localStorage.getItem('jwtToken') ? <button data-id={this.props.userid} id={this.props.id} onClick={this.props.handleLike}>Like</button> : null}			
