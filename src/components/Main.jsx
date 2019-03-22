import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

const linkList = [
	{
		path: '/main/page1',
		name: 'page1'
	},
	{
		path: '/main/page2',
		name: 'page2'
	},
	{
		path: '/main/page3',
		name: 'page3'
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
					<Route path="/main" exact component={Page1} />
					<Route path="/main/page1" component={Page1} />
					<Route path="/main/page2" component={Page2} />
					<Route path="/main/page3" component={Page3} />
				</Switch>
			</div>
		</div>
	);
};

export default Main;
