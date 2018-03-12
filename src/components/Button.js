import React from 'react'

import './List.scss'

export default function Button (props) {
  return (
    <a href={props.href} >
      <button className='main-nav-menu__list__item-button'>{props.label}</button>
    </a>
  )
}
