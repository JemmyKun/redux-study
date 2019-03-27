import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import rootReducers from './reducers/rootReducers';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger,thunk,sagaMiddleware];
const store = createStore(rootReducers,applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

