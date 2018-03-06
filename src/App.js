import React, { Component} from 'react'
import {mainNav} from './data/home.json'

import List from './components/List'

export default class App extends Component {
  render () {
    return (
      <List data={mainNav} />
    )
  }
}
