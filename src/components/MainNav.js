import React, { Component, Fragment} from 'react'

import Logo from './Logo.js'
import ButtonMenu from './ButtonMenu.js'
import List from './List.js'

import './MainNav.scss'

export default class MainNav extends Component{
	constructor(props){
		super(props)

		this.state ={
			active: false
		}

		this.showMenu = this.showMenu.bind(this)

	}

	showMenu(){
		this.setState((prevState) => {
      return {active: !prevState.active}
    })
	}

	render(){
		console.log(this.props)
		console.log(this.state)
		return(
			<Fragment>
				<div className='main-nav'>
					<div className='main-nav-container'>
						<ButtonMenu showMenu={this.showMenu} />
						<Logo logo={this.props.data.logo} />
					</div>
					<div className='main-nav-menu'>
						<List links={this.props.data.links} state={this.state.active} />
					</div>
				</div>
			</Fragment>
		)
	}
}