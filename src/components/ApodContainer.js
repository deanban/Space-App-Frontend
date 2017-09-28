import React from 'react'
import ApodImage from './ApodImage'
import ApodDescription from './ApodDescription'

export default class ApodContainer extends React.Component{

	constructor(){

		super()

		this.state = {
			data: []
		}
	}

	componentDidMount(){

		// const headers = {
		// 	method: 'GET',
		// 	mode: 'no-cors'
		// }

		fetch('https://api.nasa.gov/planetary/apod?api_key=NeEtcC0syMD5oQJF0bt49STyJamoSj4E5sv0Axui')
		.then( resp => resp.json() )
		.then(respJson => {
			this.setState({data: respJson})
		})
	}

	render(){
		return(
			<div>
				<ApodImage image={this.state.data.url} title={this.state.data.title}/>
				<div>
					<ApodDescription explanation={this.state.data.explanation}/>
				</div>
			</div>
		)
	}

}