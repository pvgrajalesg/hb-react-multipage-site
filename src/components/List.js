import React from 'react'

import Button from './Button'
import Dropdown from './Dropdown'

import './List.scss'

export default function List ({data}) {
  return (
    <ul className='main-nav-menu__list'>
      {data.links.map(({label, href, links}) => {
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
