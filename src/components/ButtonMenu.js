import React, {Component} from 'react'

import './ButtonMenu.scss'

export default class ButtonMenu extends Component{
	constructor(props){
		super(props)

		this.state ={
			active:false
		}

		this.toggle = this.toggle.bind(this)
	}

	toggle(){
		this.props.showMenu()
		this.setState((prevState) => {
      		return {active: !prevState.active}
    	})
	}

	render(){
		return(
			<div className='main-nav-container__button' >
				<button className='main-nav-container__button-closed' onClick={this.toggle}>
					<span className={ this.state.active ? 'main-nav-container__button-closed--cross' : 'main-nav-container__button-closed--line' }></span>
				</button>
			</div>
		)
	}
}