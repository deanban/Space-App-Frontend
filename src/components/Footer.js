import React from 'react'

class Footer extends React.Component{
	render(){

		const style={
			'text-align': 'center'
		}

		return(
			<div class="ui inverted vertical footer segment form-page">
				<div style={style} class="ui container">
					Made with Love & Spaghetti Code by Dean, Luke and Zali
				</div>
			</div>
			)
	}
}


export default Footer