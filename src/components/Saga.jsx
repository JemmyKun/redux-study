import React from 'react';
import { connect } from 'react-redux';
import * as types from '../actions/actionTypes';

const Saga = (props) => {
	let count = props.count || 0;
	let { handleDispatch } = props;
	return (
		<div className="page-container">
			<h1>Saga-count</h1>
			<div className="page-content">
				<button
					onClick={(e) => {
						// saga-middleware
						let action = { type: types.WATCH_INCREMENT };
						handleDispatch(action);
					}}
				>
					saga--increment+++++
				</button>
				<button
					onClick={(e) => {
						// saga-middleware
						let action = { type: types.WATCH_DECREMENT };
						handleDispatch(action);
					}}
				>
					saga--decrement--------
				</button>
				<button
					onClick={(e) => {
						// saga-middleware
						let action = { type: types.WATCH_DOUBAN_LIST };
						handleDispatch(action);
					}}
				>
					get_doban_list
				</button>
				<h2>count:{count}</h2>
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		count: state.count
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleDispatch: (action) => {
			dispatch(action);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Saga);
