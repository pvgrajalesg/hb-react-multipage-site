import React, { Component, Fragment} from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import {mainNav} from './data/home.json'

// import List from './components/List/List'
import MainNav from './components/MainNav/MainNav'

export default class App extends Component {
  render () {
    return (
      <Router>
        <Fragment>
          <Route exact path='/'
            render={() => <MainNav data={mainNav} />} />
        </Fragment>
      </Router>
    )
  }
}
