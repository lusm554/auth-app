import React, { Component } from 'react';

import AuthScreen from './AuthScreen'
import SuccessScreen from './SuccessScreen'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSuccessPage: false,
      response: {
        id: 0,
        login: ''
      }
    }
  }

  componentDidMount() {
    let url = new URL(window.location.href)
    if(url.pathname!=='/success') return;

    let login = url.searchParams.get('login')
    let id = url.searchParams.get('id')

    this.setState({
      isSuccessPage: true,
      response: {
        login,
        id
      }
    })
  }

  render() {
    let {isSuccessPage} = this.state

    return (
      <div>
        {!isSuccessPage ? 
          <AuthScreen /> : 
          <SuccessScreen response={this.state.response} />
        }
      </div>
    );
  }
}

export default App;
