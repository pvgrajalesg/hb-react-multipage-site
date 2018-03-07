import React, { Component, Fragment} from 'react'

import Logo from './Logo.js'

export default class MainNav extends Component{
	construtor(props){
		super(props)
	}

	render(){
		return(
			<Fragment>
				<Logo logo={props.logo} />
			</Fragment>
		)
	}
}