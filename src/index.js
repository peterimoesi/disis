import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';
import './index.css';
import reducers from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import history from './routes/history';

const middleWare = [
    thunk,
    routerMiddleware(history)
];

const store = createStore(
    connectRouter(history)(reducers),
    composeWithDevTools(applyMiddleware(...middleWare))
);

console.log(store);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
