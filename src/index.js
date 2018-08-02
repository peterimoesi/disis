import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';
import * as Cookies from 'js-cookie';

import reducers from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { removeUserCredentials } from './actions/setUserCredentials';

import history from './routes/history';

const middleWare = [
    thunk,
    routerMiddleware(history)
];

const store = createStore(
    connectRouter(history)(reducers),
    composeWithDevTools(applyMiddleware(...middleWare))
);

const userCredentials = Cookies.get('userCredentials');
const token = Cookies.get('token');

if (userCredentials && token) {
    try {
        store.dispatch({
            type : 'IS_AUTHENTICATED',
            user : JSON.parse(userCredentials)
        });
        store.dispatch({ type : 'LOGIN' });
    } catch (e) {
        console.error(e);
        store.dispatch(removeUserCredentials());
    }
}

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
