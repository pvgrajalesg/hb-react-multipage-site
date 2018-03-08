import React from 'react'

import Button from './Button'
import Dropdown from './Dropdown'

import './List.scss'

export default function List (props) {
  console.log(props.state)
  return (
    <ul className= { props.state ? 'main-nav-menu__list--opened' : 'main-nav-menu__list'} >
      {props.links.map(({label, href, links}) => {
        return (
          <li key={label} className='main-nav-menu__list__item'>
            {links
              ? <Dropdown label={label} links={links} />
              : <Button label={label} href={href} />
            }
          </li>
        )
      })}
    </ul >
  )
}
