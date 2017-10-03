import React from 'react'
import DisplayCard from './DisplayCard'
import StackGrid from "react-stack-grid"

export default class CuriosityContainer extends React.Component{

	state = {
		zdldata: [],
		userid: '',
		favImages: []
	}

	componentDidMount(){
		fetch('http://localhost:3000/curiosities')
		.then(resp => resp.json())
		.then(data => this.setState({
			zdldata: data,
			userid: this.props.userid
		}))

		fetch("http://localhost:3000/users/1", {
			    method: 'get',
			    headers: {
			      "Authorization": localStorage.getItem('jwtToken')
			    }
			  })
		.then(resp => resp.json())
		.then(img => this.setState({
			favImages: img.curiosities
		}))

	}

	handleLike = (event) => {
		console.log('like button clicked')
		let body = {
			picture_id: parseInt(event.target.id),
			user_id: parseInt(event.target.dataset.id)
		}

		body = JSON.stringify(body)


		fetch(`http://localhost:3000/users/likes`, {
		    method: 'post',
		    body: body,
		    headers: {
		      "Accept":"application/json",
		      "Content-Type":"application/json",
		      "Authorization": localStorage.getItem('jwtToken')
		    }
		  })
			console.log(this.state, body.picture_id, parseInt(event.target.id))
			let newImage = this.state.zdldata.find(img => img.id == parseInt(event.target.id))
			let newFavs = [...this.state.favImages, newImage]

			this.setState({
				favImages: newFavs
			})
		}

  	checkImage = (elementId) => {
			if (localStorage.getItem('jwtToken')) {
				return (this.state.favImages.find(elem => elementId == elem.id))
			}
	}

	handleUnlike = (event) => {
		let body = {
			picture_id: parseInt(event.target.id)
		}

		body = JSON.stringify(body)

		fetch(`http://localhost:3000/users/nolikes`, {
		    method: 'post',
		    body: body,
		    headers: {
		      "Accept":"application/json",
		      "Content-Type":"application/json",
		      "Authorization": localStorage.getItem('jwtToken')
		    }
		  })

		let favs = this.state.favImages.filter(img => img.id !== parseInt(event.target.id))

		this.setState({
			favImages: favs
		})

	}


	render(){
		console.log("at container", this.props.userid)
		return(
			<div className="ui cards">
				
				{this.state.zdldata.map(element => <DisplayCard
					id={element.id}
					img={element.img_src}
					date={element.earth_date}
					cam={element.cam_name}
					userid={this.state.userid}
					liked={this.checkImage(element.id) ? true : false}
					handleLike={this.handleLike}
					handleUnlike={this.handleUnlike}
					/>)
				}
      			
      		</div>
		)
	}

}
