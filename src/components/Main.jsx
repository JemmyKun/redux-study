import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Count from './Count';
import Todo from './Todo';
import Saga from './Saga';

const linkList = [
	{
		path: '/main/count',
		name: 'Count'
	},
	{
		path: '/main/todo',
		name: 'Todo'
	},
	{
		path: '/main/saga',
		name: 'Saga'
	}
];

const Main = (props) => {
	return (
		<div className="main-container">
			<div className="page-App-header">
				{linkList.map((item, index) => {
					let pathname = props.location.pathname;
					let clName = pathname === item.path ? 'active' : '';
					return (
						<span
							className={'link-btn ' + clName}
							href={item.path}
							key={index}
							onClick={() => {
								props.history.push(item.path);
							}}
						>
							{item.name}
						</span>
					);
				})}
			</div>
			<div className="main-content">
				<Switch>
					<Route path="/main" exact component={Count} />
					<Route path="/main/count" component={Count} />
					<Route path="/main/todo" component={Todo} />
					<Route path="/main/saga" component={Saga} />
				</Switch>
			</div>
		</div>
	);
};

export default Main;
