import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'


const Header = (props) => {


	console.log('in header')
	return (		
		<div className="ui tiny menu">
		  <a className="active item">
		  
		    <NavLink to="/">Curiosity</NavLink>
		  </a>
		  <a className="item">
		    <NavLink to="/apod">APOD</NavLink>
		  </a>
		  <a className="item">
		    <NavLink to="/homepage">Homepage</NavLink>
		  </a>
		  <div className="right menu">
		    </div>
		    <div className="item">
		    	{ localStorage.getItem('jwtToken') ? <div className="ui primary button" onClick={props.handleLogout}>Sign Out</div> : <NavLink className="ui primary button" to="/login">Login</NavLink> }
		        
		    </div>
		  </div>
		

	)
}

export default Header