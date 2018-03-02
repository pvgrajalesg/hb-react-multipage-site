import React from 'react'
import './Message.scss'

export default function Message (props) {
  console.log(props.usuario.nombre)
  return (
    <div className='message'>
      { 'Welcome ' + props.usuario.nombre}
    </div>
  )
}
