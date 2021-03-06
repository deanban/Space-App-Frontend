import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'


const Header = (props) => {

	const logout = <div className="ui primary button" onClick={props.handleLogout}>Sign Out</div>
	// const login = <NavLink className="ui primary button" to="/login">Login</NavLink>
	// const signup = <NavLink className="ui primary button" to="/login">Sign up</NavLink>
	const logsign = <div><NavLink className="ui primary button" to="/login">Login</NavLink> <NavLink className="ui primary button" to="/signup">Sign up</NavLink></div>

	const logButtons = () => {
		if (localStorage.getItem('jwtToken')) {
			return logout
		} else {
			return (
				logsign
			)
		}
	}



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
		  <a className="item">
		    <NavLink to="/asteroids">Asteroid</NavLink>
		  </a>

		  <div className="right menu">
				{props.name ? <div className="item">
					{props.name ? <div>Welcome, {props.name}</div> : null }
				</div> : null}

				<div className="item">
		    	{logButtons()}
		    </div>

			</div>
	  </div>


	)
}

export default Header
