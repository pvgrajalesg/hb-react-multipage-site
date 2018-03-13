import React, {Fragment, Component} from 'react'

import Button from './../Button/Button'

import './Dropdown.scss'

export default class Dropdown extends Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false
    }

    this.toggle1 = this.toggle1.bind(this)
  }

  toggle1 (e) {
    // this.props.showDropdown()
    e.preventDefault()
    console.log()
    this.props.showDropdown()
    this.setState((prevState) => {
      return {open: !prevState.open}
    })
  }

  render () {
    return (
      <Fragment>
        <div className='main-nav-menu__list__item-dropdown'>
          <Button label={this.props.label} href='#' />
          <span className='main-nav-menu__list__item-dropdown__arrow' />
        </div>
        <div className={this.state.open ? 'main-nav-menu__list__item-dropdown--opened' + ' ' + 'main-nav-menu__list__item-menu' : 'main-nav-menu__list__item-menu'} >
          {this.props.links.map(({label, href}) => {
            return (
              <Button key={label} label={label} href={href} onClick={this.toggle1} />
            )
          })
        }
        </div>
      </Fragment>
    )
  }
}
