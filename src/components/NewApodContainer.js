import React from 'react'
import ApodImage from './ApodImage'
import ApodDescription from './ApodDescription'
import NewApodImage from './NewApodImage'

class NewApodContainer extends React.Component {
  
  constructor(){

		super()

		this.state = {
			data: []
		}
	}

	componentWillMount(){

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
  
  render() {
    {console.log('rendering', this.state)}
    return (
      <div className="content">
  
  				<section id="banner">
  					<div className="content">
  						<header>
  							<h2>The future has landed</h2>
  							<p>And there are no hoverboards or flying cars.<br />
  							Just apps. Lots of mother flipping apps.</p>
  						</header>
  						<span className="image"><img src={this.state.image} alt="" /></span>
  					</div>
  					<a href="#one" className="goto-next scrolly">Next</a>
  				</section>
  
  				{/*
          <section id="one" className="spotlight style1 bottom">
  					<span className="image fit main"><img src="images/pic02.jpg" alt="" /></span>
  					<div className="content">
  						<div className="container">
  							<div className="row">
  								<div className="4u 12u$(medium)">
  									<header>
  										<h2>Odio faucibus ipsum integer consequat</h2>
  										<p>Nascetur eu nibh vestibulum amet gravida nascetur praesent</p>
  									</header>
  								</div>
  								<div className="4u 12u$(medium)">
  									<p>Feugiat accumsan lorem eu ac lorem amet sed accumsan donec.
  									Blandit orci porttitor semper. Arcu phasellus tortor enim mi
  									nisi praesent dolor adipiscing. Integer mi sed nascetur cep aliquet
  									augue varius tempus lobortis porttitor accumsan consequat
  									adipiscing lorem dolor.</p>
  								</div>
  								<div className="4u$ 12u$(medium)">
  									<p>Morbi enim nascetur et placerat lorem sed iaculis neque ante
  									adipiscing adipiscing metus massa. Blandit orci porttitor semper.
  									Arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer
  									mi sed nascetur cep aliquet augue varius tempus. Feugiat lorem
  									ipsum dolor nullam.</p>
  								</div>
  							</div>
  						</div>
  					</div>
  					<a href="#two" className="goto-next scrolly">Next</a>
  				</section>
          */}
        <NewApodImage image={this.state.data.url} title={this.state.data.title} explanation={this.state.data.explanation}/>
  
  		</div>
    )
  }
}

export default NewApodContainer