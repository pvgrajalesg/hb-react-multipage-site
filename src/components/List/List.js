import React from 'react'

import Button from './../Button/Button'
import Dropdown from './../Dropdown/Dropdown'

import './List.scss'

export default function List (props) {
  console.log({props})
  return (
    <ul className={props.state ? 'main-nav-menu__list--opened' : 'main-nav-menu__list'} >
      {props.links.map(({label, href, links}) => {
        return (
          <li key={label} className='main-nav-menu__list__item'>
            {links
                ? <Dropdown label={label} links={links} showDropdown={props.showDropdown} />
                : <Button label={label} href={href} />
            }
          </li>
        )
      })}
    </ul>
  )
}
