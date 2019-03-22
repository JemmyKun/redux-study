import React from 'react';
import { connect } from 'react-redux';
import * as types from '../actions/actionTypes';

const Page2 = (props) => {
	let todo = props.todo || [];
	let inputValue = props.inputValue || '';
	let { hadnleDispatch } = props;
	return (
		<div className="page-container">
			<div className="page-container">
				<h1>page2</h1>
				<div className="page-content">
					<div>
						<input
							type="text"
							value={inputValue}
							placeholder="add todo..."
							onChange={(e) => {
								let value = e.target.value;
								let action = {
									type: types.CHNAGE_INPUT_VALUE,
									value
								};
								hadnleDispatch(action);
							}}
							onKeyDown={(e) => {
								if (inputValue === '') {
									return false;
								}
								let keyCode = e.keyCode;
								if (keyCode === 13) {
									let action = {
										type: types.ADD_TODO,
										name: inputValue
									};
									hadnleDispatch(action);
								}
							}}
						/>
						<button
							onClick={() => {
								if (inputValue === '') {
									return false;
								}
								let action = {
									type: types.ADD_TODO,
									name: inputValue
								};
								hadnleDispatch(action);
							}}
						>
							add
						</button>
					</div>
					<ul className="todo-list">
						{todo.map((item, index) => {
							let { cteateTime, name, isActive } = item;
							let active = isActive ? 'active' : '';
							return (
								<li
									className={'todo-item ' + active}
									key={index}
									onClick={() => {
										let action = {
											type: types.ACTIVE_TODO_ITEM,
											index
										};
										hadnleDispatch(action);
									}}
								>
									<span>
										{index + 1}： {name}-{cteateTime}
									</span>
									<span>
										<b
											onClick={() => {
												let action = {
													type: types.DELETE_TODO,
													index
												};
												hadnleDispatch(action);
											}}
										>
											删除
										</b>
									</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		todo: state.todo,
		inputValue: state.inputValue
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		hadnleDispatch: (action) => {
			dispatch(action);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Page2);
