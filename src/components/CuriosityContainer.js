import React from 'react'
import CuriosityCard from './CuriosityCard'
import StackGrid from "react-stack-grid"

export default class CuriosityContainer extends React.Component{

	state = {
		zdldata: []
	}

	componentDidMount(){
		fetch('http://localhost:3000/curiosities')
		.then(resp => resp.json())
		.then(data => this.setState({
			zdldata: data
		}))

	}

	handleLike = (event) => {
		console.log(event)
		debugger

		const params = {
			picture_id: parseInt(event.target.id),
		}


		// fetch('http://localhost:3000/users/{this.props.user.id}/likes/, {
		//     method: 'post',
		//     body: body,
		//     headers: {
		//       "Accept":"application/json",
		//       "Content-Type":"application/json"
		//     }
		//   }
		//  )
  	}


	render(){
		return(
			<div>
				<StackGrid columnWidth={150}>
				
					{this.state.zdldata.map(element => <CuriosityCard 
						id={element.id} 
						img={element.img_src} 
						date={element.earth_date} 
						cam={element.cam_name}
						user_id={this.props.user_id}
						handleLike={this.handleLike} />)
					}

      			</StackGrid>
      		</div>
		)
	}

}