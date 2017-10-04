import React from 'react'

class Signup extends React.Component {

  state = {
    username: '',
    password: ''
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

  handleSubmit = (event) => {
    event.preventDefault()

    if(this.state.username && this.state.password){
      var loginParams = { username: this.state.username, password: this.state.password}
    }
    const body = JSON.stringify(loginParams)
    return fetch("http://localhost:3000/users", {
      method: 'post',
      body: body,
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })

    this.setState({
      username: "",
      password: ""
    })
  }
  render() {
      return (
        <div className='ui container'>

          <form onSubmit={this.handleSubmit}>
            <div class="ui input">
              <input type="text" name="username" placeholder="username" onChange={this.handleUsernameChange} value={this.state.username}/>
            </div>

            <div class="ui input">
              <input type="password" name="password" placeholder="password" onChange={this.handlePasswordChange} value={this.state.password}/>
            </div>
            <button class="ui primary basic button">Submit</button>
          </form>
        </div>
      )
  }
}

export default Signup
