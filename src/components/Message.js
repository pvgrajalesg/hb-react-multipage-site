import React from 'react'
import './Message.scss'

export default function Message ({usuario}) {
  console.log(usuario.nombre)
  return (
    <div className='message'>
      { 'Welcome ' + usuario.nombre + ' ' + usuario.apellido }
    </div>
  )
}
