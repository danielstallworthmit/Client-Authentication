import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReduxThunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';

import Signin from './components/auth/signin';
import Signout from './components/auth/signout';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='signin' component={Signin} />
        <Route path='signout' component={Signout} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
