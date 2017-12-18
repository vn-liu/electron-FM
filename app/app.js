import ReactDOM from 'react-dom'
import React from 'react'
import { Router, Route, Link, IndexRoute } from 'react-router'
import { createBrowserHistory } from 'history'
import HomePage from './component/homePage/index'
const history = createBrowserHistory()


ReactDOM.render(
    <Router history={history}>
        <Route component={HomePage} path="/"/>
    </Router>,
    document.getElementById('root')
)