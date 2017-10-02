import React from 'react'
import StackGrid from "react-stack-grid"


const CuriosityCard = (props) =>{

	const style = {
		height: "150px",
		width: "150px"
	}

	return(
			<div id={props.id}>
				<img style={style} src={props.img}/>
				{ localStorage.getItem('jwtToken') ? <button className={props.user_id} id={props.id} onClick={props.handleLike}>Like</button> : null}
				
			</div>
			
	)

}	

export default CuriosityCard