import React from 'react'
import CuriosityCard from './CuriosityCard'
import StackGrid from "react-stack-grid"

export default class CuriosityContainer extends React.Component{

	state = {
		zdldata: []
	}

	componentDidMount(){
		fetch('http://localhost:3001/curiosity')
		.then(resp => resp.json())
		.then(data => this.setState({
			zdldata: data
		}))

	}

	render(){
		console.log(this.state.zdldata)

		let flobble = this.state.zdldata.map(element => <CuriosityCard key={element.id} img={element.img_src} date={element.earth_date} cam={element.cam_name} />)

		return(
			<div>
				<StackGrid columnWidth={150}>
					{flobble}
      			</StackGrid>
      		</div>
			)
	}

}