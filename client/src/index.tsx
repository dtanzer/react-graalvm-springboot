import './index.css'
import * as serviceWorker from './serviceWorker'

import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server';
import App from './App'

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

const anyWindow: any = window
anyWindow.renderApp = () => {
	ReactDOM.hydrate(<App />, document.getElementById('root'))
}
anyWindow.renderAppOnServer = () => {
	return ReactDOMServer.renderToString(<App />)
}
anyWindow.isServer = false
