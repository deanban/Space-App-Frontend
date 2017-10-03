import React from 'react'
import StackGrid from "react-stack-grid"


class DisplayCard extends React.Component {

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
			return this.props.liked ? <button className="negative ui button" data-id={this.props.userid} id={this.props.id} onClick={this.props.handleUnlike}>Unlike</button> : <button className="positive ui button" data-id={this.props.userid} id={this.props.id} onClick={this.props.handleLike}>Like</button>
		}
	}

	render () {
		{console.log('render displaycard')}

		return (

			<div className="ui card" id={this.props.id}>
				<div className="image"> 
				<img  src={this.props.img}/>
				</div>
				<div className="content">
				{this.showButton()}
				</div>
			</div>)
	}

}

export default DisplayCard
