import React from 'react'

const ApodDescription = (props) => {

	var style = {
		width: '75%',
		'text-align': 'center',
    	margin:'auto'
	}

	return(
		<div style={style}>
			{props.explanation}
		</div>
		)
}

export default ApodDescription