import React from 'react'
import StackGrid from "react-stack-grid"


const CuriosityCard = (props) =>{

	const style = {
		height: "150px",
		width: "150px"
	}
	return(
			
			<img style={style} src={props.img}/>
			
	)

}	

export default CuriosityCard