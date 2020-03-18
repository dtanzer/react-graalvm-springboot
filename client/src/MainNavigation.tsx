import React from 'react'
import { NavLink } from 'react-router-dom'

export const MainNavigation = () => {
	return <ul>
		<li><NavLink to="/">Home</NavLink></li>
		<li><NavLink to="/r/about">About</NavLink></li>
		<li><NavLink to="/r/list">List</NavLink></li>
	</ul>
}