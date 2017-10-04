import React from 'react'
import { loginUser } from '../services/user'
import { Redirect } from 'react-router-dom'


class LoginForm extends React.Component {

  state = {
    username: "",
    password: ""
  }


  handleSubmit = (event) => {
    event.preventDefault()
    console.log("Clicking Button", this.state.username, this.state.password)

    if(this.state.username && this.state.password){
      const loginParams = { username: this.state.username, password: this.state.password}

      this.props.onLogin(loginParams)
      this.setState({
        username: "",
        password: ""
      })

    }
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })

  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })

  }
  render() {


      return (
        <div className='ui container'>
          <form onSubmit={this.handleSubmit}>
            <div class="ui input">
              <input type="text" placeholder="username" onChange={this.handleUsernameChange} value={this.state.username}/>
            </div>
            <div class="ui input">
              <input type="password" placeholder="password" onChange={this.handlePasswordChange} value={this.state.password}/>
            </div>
            <button class="ui primary basic button">Submit</button>

            {/*<input type="submit" value="Submit"/>*/}
          </form>      

        </div>
      )

  }


}

export default LoginForm
