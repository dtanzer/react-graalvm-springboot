import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.ul`
	display: flex;
	list-style: none;
	padding: 0;
`

const Item = styled.li`
	margin: 0;
	padding: 0;

	::after {
		display: inline;
		content: "|";
		padding: 0 0.5em;
	}

	:last-child::after {
		content: "";
	}
`

export const MainNavigation = () => {
	return (<Nav>
		<Item><NavLink to="/">Home</NavLink></Item>
		<Item><NavLink to="/r/about">About</NavLink></Item>
		<Item><NavLink to="/r/list">List</NavLink></Item>
	</Nav>)
}