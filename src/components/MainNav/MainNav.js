import React, { Component, Fragment} from 'react'

import Logo from './../Logo/Logo'
import ButtonMenu from './../ButtonMenu/ButtonMenu'
import List from './../List/List'

import './MainNav.scss'

export default class MainNav extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activeHamburger: false,
      openDropdown: false
    }

    this.showMenu = this.showMenu.bind(this)
  }

  showMenu () {
    this.setState((prevState) => {
      return {activeHamburger: !prevState.activeHamburger}
    })
  }

  showDropdown () {
    this.setState((prevState) => {
      return {openDropdown: !prevState.openDropdown}
    })
  }

  render () {
    console.log(this.props)
    console.log(this.state)
    return (
      <Fragment>
        <div className='main-nav'>
          <div className='main-nav-container'>
            <ButtonMenu showMenu={this.showMenu} />
            <Logo logo={this.props.data.logo} />
          </div>
          <div className='main-nav-menu'>
            <List links={this.props.data.links} state={this.state.activeHamburger} showDropdown={this.showDropdown} />
          </div>
        </div>
      </Fragment>
    )
  }
}
