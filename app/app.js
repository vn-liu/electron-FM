import ReactDOM from 'react-dom'
import React from 'react'
import store from './store'
import { Router, Route, Link, IndexRoute } from 'react-router'
import { createBrowserHistory } from 'history'
import HomePage from './component/homePage/index'
import { Provider } from 'mobx-react'
import Layout from './component/layout/index'
const history = createBrowserHistory()


ReactDOM.render(
    <Provider {...store}>
        <Layout>
            <Router history={history}>
                <Route component={HomePage} path="/"/>
            </Router>
        </Layout>
    </Provider>,
    document.getElementById('root')
)