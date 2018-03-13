import React from 'react'

import './Logo.scss'

export default function Logo (props) {
  return (
    <div className='main-nav-container__logo'>
      <a href={props.logo.link}>
        <img src={props.logo.img} />
      </a>
    </div>

  )
}
