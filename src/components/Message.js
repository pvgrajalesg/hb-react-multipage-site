import React from 'react'
import './Message.scss'

export default function Message ({user}) {
  return (
    <div className='message'>
      { 'Welcome ' + user.name + ' ' + user.lastName }
    </div>
  )
}
