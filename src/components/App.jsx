import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route path="/" component={Main} />
					<Route path="/main" exact component={Main} />
				</Switch>
			</div>
		);
	}
}

export default App;
