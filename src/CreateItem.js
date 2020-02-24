import React, { Component } from 'react';

import { connect } from "react-redux";
import { actions } from "./redux";

class CreateItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: ''
		};
	}

	onClickCreate = () => {
		this.props.addTodo(this.state.title);
		this.setState({
			title: ''
		});
	};

	onTitleChange = title => {
		this.setState({
			title
		});
	};

	render() {
		return (
			<div className="item">
				<span className="title">
					<input 
						type="text"
						onChange={event => this.onTitleChange(event.target.value)}
						value={this.state.title}
					/>
				</span>
				<span className="buttons">
					<button className="create" onClick={this.onClickCreate}>+</button>
				</span>
			</div>
		);
	}
}

const { addTodo } = actions;
export default connect(
	null,
	{
		addTodo
	}
)(CreateItem);
