import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import store from './store/createStore'
import App from './components/App';

const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={App} />
      </Switch>
    </Router>
  </Provider>, document.getElementById('root'));

