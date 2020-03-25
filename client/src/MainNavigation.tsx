import React from 'react'
import { NavLink } from 'react-router-dom'

import './MainNavigation.css'

export const MainNavigation = () => {
	return (<ul className="navigation">
		<li><NavLink to="/">Home</NavLink></li>
		<li><NavLink to="/r/about">About</NavLink></li>
		<li><NavLink to="/r/list">List</NavLink></li>
	</ul>)
}