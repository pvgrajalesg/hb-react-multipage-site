import React from 'react'
import './Message.scss'

export default function Message ({user}) {
  return (
    <div className='message'>
      { 'Welcome ' + user.nombre + ' ' + user.apellido }
    </div>
  )
}
