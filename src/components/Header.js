import React from 'react'
import { NavLink } from 'react-router-dom'



const Header = () => {

	console.log('in header')
	return (		
		<div className="ui tiny menu">
		  <a className="active item">
		  
		    <NavLink to="/">Curiosity</NavLink>
		  </a>
		  <a className="item">
		    <NavLink to="/apod">APOD</NavLink>
		  </a>
		  <div className="right menu">
		    </div>
		    <div className="item">
		    
		        <div className="ui primary button">Sign In</div>
		        <div className="ui primary button">Sign Out</div>
		    </div>
		  </div>
		

	)
}

export default Header