import React, { Component} from 'react'
import {user} from './data/home.json'

import Message from './components/Message'

export default class App extends Component {
  render () {
    return (
      <Message user={user} />
    )
  }
}
