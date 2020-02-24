import React, { Component } from 'react';

import { connect } from "react-redux";

import CreateItem from './CreateItem';
import Item from './Item';
import './List.css';

class List extends Component {
	render() {
		const { items } = this.props;
		return (
			<div className="list">
				{items.map(item => 
					<Item 
						key={item.id}
						item={item}
					/>
				)}
				{!items.length && 'No items.'}
				<CreateItem />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { items: state.items };
};
export default connect(mapStateToProps)(List);