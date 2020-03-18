import './index.css'
import * as serviceWorker from './serviceWorker'

import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server';
import { BrowserRouter, StaticRouter, } from 'react-router-dom'


import { Routes } from './Routes'

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

const anyWindow: any = window
anyWindow.renderApp = () => {
	ReactDOM.hydrate(<BrowserRouter><Routes /></BrowserRouter>, document.getElementById('root'))
}
anyWindow.renderAppOnServer = () => {
	return ReactDOMServer.renderToString(<StaticRouter location={anyWindow.requestUrl}><Routes /></StaticRouter>)
}
anyWindow.isServer = false
