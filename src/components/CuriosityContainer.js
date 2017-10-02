import React from 'react'
import CuriosityCard from './CuriosityCard'
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
		  }
		)
  	}

  	checkImage = (elementId) => {
  		return (this.state.favImages.find(elem => elementId == elem.id) ? true : false)
	}


	render(){
		console.log("at container", this.props.userid)
		return(
			<div>
				<StackGrid columnWidth={150}>
				
					{this.state.zdldata.map(element => <CuriosityCard 
						id={element.id}
						img={element.img_src} 
						date={element.earth_date} 
						cam={element.cam_name}
						userid={this.state.userid}
						liked={this.checkImage(element.id) ? true : false}
						handleLike={this.handleLike} />)
					}

      			</StackGrid>
      		</div>
		)
	}

}