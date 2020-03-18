import React from 'react'
import { Route } from 'react-router-dom'

import { App } from './App'
import { About } from './About'
import { List } from './List'
import { MainNavigation } from './MainNavigation'

export const Routes = () => {
	return <>
		<Route path="/" component={MainNavigation} />
		<Route path="/" exact component={ App } />
		<Route path="/r/about" component={ About } />
		<Route path="/r/list" component={ List } />
	</>
}
