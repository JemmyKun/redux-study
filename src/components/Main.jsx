import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Count from './Count';
import Todo from './Todo';
import Saga from './Saga';
import Douban from './Douban';

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
	},
	{
		path: '/main/douban',
		name: 'Douban-api'
	}
];

const Main = (props) => {
	return (
		<div className="main-container">
			<div className="page-App-header">
				{linkList.map((item, index) => {
					let pathname = props.location.pathname;
					let clName = pathname === item.path || (pathname === '/' && index === 0) ? 'active' : '';
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
					<Route path="/" exact component={Count} />
					<Route path="/main/count" component={Count} />
					<Route path="/main/todo" component={Todo} />
					<Route path="/main/saga" component={Saga} />
					<Route path="/main/douban" component={Douban} />
				</Switch>
			</div>
		</div>
	);
};

export default Main;
