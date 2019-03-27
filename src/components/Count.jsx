import React from 'react';
import { connect } from 'react-redux';
import * as types from '../actions/actionTypes';

const Count = (props) => {
	let count = props.count || 0;
	let { handleDispatch } = props;
	return (
		<div className="page-container">
			<h1>page1-count</h1>
			<div className="page-content">
				<button
					onClick={(e) => {
						let action = { type: types.INCREMENT };
						handleDispatch(action);
					}}
				>
					increment+++++
				</button>
				<button
					onClick={(e) => {
						// 使用thunk,action 可以传入一个function
						let action = (dispatch, getState) => {
							// console.log('getState===>>:', getState());
							setTimeout(function() {
								dispatch({ type: types.INCREMENT });
							}, 1000 * 3);
						};
						handleDispatch(action);
					}}
				>
					redux-thunk延迟3s执行INCREMENT
				</button>
				<button
					onClick={(e) => {
						handleDispatch({ type: types.DECREMENT });
					}}
				>
					decrement--------
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

export default connect(mapStateToProps, mapDispatchToProps)(Count);
