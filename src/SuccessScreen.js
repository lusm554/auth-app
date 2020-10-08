import React, { Component } from 'react'

class SuccessScreen extends Component {
  render() {
    let {login, id} = this.props.response
    
    return (
      <div>
        <p>Login: {login}</p>
        <p>Id: {id}</p>
      </div>
    )
  }
}

export default SuccessScreen
