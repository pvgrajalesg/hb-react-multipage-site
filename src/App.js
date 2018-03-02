import React, { Component} from 'react'
import {usuario} from './data/home.json'

import Message from './components/Message'

export default class App extends Component {
  render () {
    return (
      <Message usuario={usuario} />
    )
  }
}
