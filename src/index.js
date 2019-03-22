import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import rootReducers from './reducers/rootReducers';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'

const store = createStore(rootReducers,applyMiddleware(logger));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

