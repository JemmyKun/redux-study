import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as types from '../actions/actionTypes';
import { CovertToSagaType, CovertFromSagaType } from '../utils/saga-type';

const Douban = (props) => {
	let count = props.count || 0;
	let { handleDispatch } = props;
	let [ name, setName ] = useState('');
	useEffect(
		() => {
			console.log(name);
		},
		[ name ]
	);
	return (
		<div className="page-container">
			<h1>Douban-count-api</h1>
			<div className="page-content">
				<button
					onClick={() => {
						let action = { type: CovertToSagaType(types.DOUBAN_LIST) }; // 发给saga 的action
						handleDispatch(action);
						setName(CovertToSagaType(types.DOUBAN_LIST));
					}}
				>
					DOUBAN_LIST
				</button>
				<button
					onClick={() => {
						let action = { type: CovertToSagaType(types.DOUBAN_THEATERS) }; // 发给saga 的action
						handleDispatch(action);
						setName(CovertToSagaType(types.DOUBAN_THEATERS));
					}}
				>
					DOUBAN_THEATERS
				</button>
				<button
					onClick={() => {
						let action = { type: CovertToSagaType(types.DOUBAN_SOON) }; // 发给saga 的action
						handleDispatch(action);
						setName(CovertToSagaType(types.DOUBAN_SOON));
					}}
				>
					DOUBAN_SOON
				</button>
			</div>
			<h1>count:{count}</h1>
			<div>redux-saga 监听的action.type:{name}</div>
			<h2>真实的action.type:{CovertFromSagaType(name)}</h2>
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

export default connect(mapStateToProps, mapDispatchToProps)(Douban);
