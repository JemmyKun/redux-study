import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as types from '../actions/actionTypes';

let format = (time) => {
	if (isNaN(time)) {
		return '----';
	}
	let now = new Date(time);
	let year = now.getFullYear();
	let month = now.getMonth() + 1;
	month = month < 10 ? '0' + month : month;
	let day = now.getDate();
	day = day < 10 ? '0' + day : day;

	let hour = now.getHours();
	hour = hour < 10 ? '0' + hour : hour;
	let mins = now.getMinutes();
	mins = mins < 10 ? '0' + mins : mins;
	let secs = now.getSeconds();
	secs = secs < 10 ? '0' + secs : secs;

	let formatTime = `${year}/${month}/${day} ${hour}:${mins}:${secs}`;
	return formatTime;
};

const Todo = (props) => {
	let todo = props.todo || [];
	let inputValue = props.inputValue || '';
	let { hadnleDispatch } = props;
	let [ searchKey, setSearchKey ] = useState('');
	useEffect(() => {}, [ searchKey ]);

	return (
		<div className="page-container">
			<div className="page-container">
				<h1>page2-todo</h1>
				<div className="page-content">
					<div>
						<input
							type="text"
							value={inputValue}
							placeholder="add todo"
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
					<div>
						<input
							type="text"
							placeholder="search..."
							value={searchKey}
							onChange={(e) => {
								let val = e.target.value;
								setSearchKey(val);
								if (val === '') {
									let action = {
										type: types.SEARCH_TODO,
										searchKey: val
									};
									hadnleDispatch(action);
								}
							}}
							onKeyDown={(e) => {
								let keyCode = e.keyCode;
								if (keyCode === 13) {
									let action = {
										type: types.SEARCH_TODO,
										searchKey: searchKey
									};
									hadnleDispatch(action);
								}
							}}
						/>
						<button
							onClick={() => {
								let action = {
									type: types.SEARCH_TODO,
									searchKey: searchKey
								};
								hadnleDispatch(action);
							}}
						>
							search
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
										{index + 1}、 {format(cteateTime)}
										{name}
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

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
