import { ADD_TODO, REMOVE_TODO, SET_TODO_COMPLETED } from "../actionTypes";

const initialState = {
	items: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case ADD_TODO: {
			const {
				id, title
			} = action.payload;
			const newItem = {
				userId: 1,
				id,
				title,
				completed: false
			};
			return {
				...state,
				items: [...state.items, newItem]
			};
		}

		case REMOVE_TODO: {
			const { id } = action.payload;
			return {
				...state,
				items: state.items.filter(item => item.id !== id)
			};
		}

		case SET_TODO_COMPLETED: {
			const { id, completed } = action.payload;
			return {
				...state,
				items: state.items.map(item => 
					(item.id === id)
						? { ...item, completed }
						: item
				)
			};
		}

		default:
			return state;
	}
}
