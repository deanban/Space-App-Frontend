import React from 'react'

const ApodImage = (props) => {
	console.log(props)
	return(
		<div>
		
			<div>{props.title}</div>
		
			<img src={props.image} />
		</div>
		)
}

export default ApodImage