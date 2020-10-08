import React, { Component } from 'react'

class AuthScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  inputLoginChangeHandler({target}) {
    let username = target.value
    this.setState({username})
  }

  inputPasswordChangeHandler({target}) {
    let password = target.value
    this.setState({password})
  }

  buttonClickHandler() {
    fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then( async (response) => {
        if(response.status !== 200) {
          console.log(response.status, response.statusText)
          return
        } 

        let data = await response.json()
        this.props.setResponse(data)
        window.location.href = `http://localhost:3000/success?login=${data.login}&id=${data.id}`
      })
      .catch((err) => {
        alert(err.message)
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <div>
          <h3>Login</h3>
          <input onChange={this.inputLoginChangeHandler.bind(this)}></input>
        </div>
        <div>
          <h3>Password</h3>
          <input type="password" onChange={this.inputPasswordChangeHandler.bind(this)}></input>
        </div> <br/>
        <button onClick={this.buttonClickHandler.bind(this)}>Авторизация</button>
      </div>
    )
  }
}

export default AuthScreen
