import React, { Component} from 'react'
import {mainNav} from './data/home.json'

import List from './components/List'
import MainNav from './components/Logo'

export default class App extends Component {
  render () {
    return (
      <MainNav data={mainNav} />
    )
  }
}
