import React, {Fragment} from 'react'

import Button from './Button'

export default function Dropdown (props) {
  console.log(props.inks)
  return (
    <Fragment>
      <div>
        <Button label={props.label} href='#' />
        <span className='main-nav-menu__list__item-dropdown__arrow' />
      </div>
      <div>
        {props.links.map(({label, href}) => {
          return (
            <Button label={label} href={href} />
          )
        })
      }
      </div>
    </Fragment>
  )
}
