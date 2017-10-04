import React from 'react'
import StackGrid from "react-stack-grid"
import DisplayCard from './DisplayCard'


class HomepageContainer extends React.Component {

	state = {
		favImages: [],
		imageSelected: false
	}



	componentDidMount() {

	console.log('mounted')
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

		let favs = this.state.favImages

		this.setState({
			favImages: favs.filter(img => img.id !== parseInt(event.target.id))
		})

	}

	render() {
		return (
			<div className="ui cards">
				
					{this.state.favImages.map(favImg => <DisplayCard
					id={favImg.id}
					img={favImg.img_src}
					handleUnlike={this.handleUnlike}
					liked="true"
					/>)}
			
			</div>
		)
	}

}

// this.state.favImages.map(img => <CuriosityCard src={img.img_src} />)
export default HomepageContainer
