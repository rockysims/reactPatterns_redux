import React, { Component } from 'react';

import { connect } from "react-redux";
import { actions } from "./redux";

import './Item.css';

class Item extends Component {
	render() {
		const { id, title, completed } = this.props.item;
		const { setTodoCompleted, removeTodo } = this.props;
		return (
			<div className={`item ${completed?'completed':''}`}>
				<span className="status">
					<input type="checkbox" checked={completed} onChange={event => setTodoCompleted(id, event.target.checked)}></input>
				</span>
				<span className="title">
					{title}
				</span>
				<span className="buttons">
					<button className="delete" onClick={() => removeTodo(id)}>X</button>
				</span>
			</div>
		);
	}
}

const { setTodoCompleted, removeTodo } = actions;
export default connect(
	null,
	{
		setTodoCompleted,
		removeTodo
	}
)(Item);