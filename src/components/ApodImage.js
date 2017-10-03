import React from 'react'

const ApodImage = (props) => {
	console.log(props)

	var style = {
		width: '75%',
		display:'block',
    	margin:'auto'
	}

	var title = {
		'text-align': 'center'
	}

	return(
		<div>
		
			<div style={title} >{props.title}</div>
		
			<img style={style} src={props.image} />
		</div>
		)
}

export default ApodImage