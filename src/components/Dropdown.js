import React, {Fragment} from 'react'

import Button from './Button'

export default function Dropdown (props) {
  return (
    <Fragment>
      <div>
        <Button label={props.label} href='#' />
        <span className='main-nav-menu__list__item-dropdown__arrow' />
      </div>
      <div>
        {props.links.map(({label, href}) => {
          return (
            <Button key={label} label={label} href={href} />
          )
        })
      }
      </div>
    </Fragment>
  )
}
