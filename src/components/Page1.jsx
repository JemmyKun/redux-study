import React from 'react';
import { connect } from 'react-redux';

const Page1 = (props) => {
	let count = props.count || 0;
	let { handleDispatch } = props;
	return (
		<div className="page-container">
			<h1>page1-count</h1>
			<div className="page-content">
				<button
					onClick={(e) => {
						// 使用thunk,action 可以传入一个function
						let action = (dispatch, getState) => {
							console.log('getState===>>:', getState());
							setTimeout(function() {
								dispatch({ type: 'INCREMENT' });
							}, 1000 * 3);
						};
						handleDispatch(action);
					}}
				>
					increment+++++
				</button>
				<button
					onClick={(e) => {
						handleDispatch({ type: 'DECREMENT' });
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

export default connect(mapStateToProps, mapDispatchToProps)(Page1);
