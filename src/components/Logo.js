import React from 'react'

import './Logo.scss'

export default function Logo(props){
	console.log(props)
	return(
		<div className='main-nav-container__logo'>
			<a href={props.data.logo.link}>
				<img src={props.data.logo.img} />
			</a>
		</div>

	)
}