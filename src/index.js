import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Redirect, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import store from './store/createStore'

import App from './components/App';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Login from './containers/Login';
import Callback from './components/Callback';

const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Redirect exact from="/" to="/account/login" />
                <PublicRoute exact path="/account/login" component={Login} />
                <PublicRoute exact path="/account/callback" component={Callback} />
                <PrivateRoute path="/app" component={App} />
            </Switch>
        </Router>
    </Provider>, document.getElementById('root'));

