import React, { Fragment} from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import {user} from './data/home.json'
import Message from './components/Message'

export default function App {
  return (
    <Router>
    	<Fragment>
    		<Route exact path='/' render={() => <Message user={user} />} />
      	</Fragment>
     </Router>
    )
}
