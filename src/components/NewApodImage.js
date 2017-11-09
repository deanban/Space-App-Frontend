import React from 'react'
import { Image } from 'semantic-ui-react'

class NewApodImage extends React.Component {
  
  render() {
    
    return (
      
      <section id="one" className="spotlight left">
        <span className="image fit main bottom">
        <Image src={this.props.image} />
        </span>
        <div className="content">
          <header>
            <h2>{this.props.title}</h2>
            <br />
            <p>{this.props.explanation}</p>
          </header>
      
        </div>
      </section>
    )
  }
}

export default NewApodImage