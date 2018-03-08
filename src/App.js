import React, { Component, Fragment} from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import {user} from './data/home.json'
import Message from './components/Message'

export default class App extends Component {
	constructor(props){
		super(props)
	}

  render () {
    return (
    	<Router>
    		<Fragment>
    			<Route exact path='/'
      			render={() => <Message user={user} />} />
      	</Fragment>
      </Router>
    )
  }
}
