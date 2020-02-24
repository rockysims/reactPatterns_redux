
const reduceByType = {};

let nextId = 201;
reduceByType['addTodo'] = (state, payload) => {
	const [ title ] = payload;
	const newItem = {
		userId: 1,
		id: nextId++,
		title,
		completed: false
	};
	return {
		...state,
		items: [...state.items, newItem]
	};
};

reduceByType['removeTodo'] = (state, payload) => {
	const [ id ] = payload;
	return {
		...state,
		items: state.items.filter(item => item.id !== id)
	};
};

reduceByType['setTodoCompleted'] = (state, payload) => {
	const [ id, completed ] = payload;
	return {
		...state,
		items: state.items.map(item => 
			(item.id === id)
				? { ...item, completed }
				: item
		)
	};
};

const initialState = {
	items: []
};

// --- //

export const rootReducer = (state = initialState, { type, payload }) => {
	const reduce = reduceByType[type];
	return reduce
		? reduce(state, payload)
		: state;
};

export const actions = Object.fromEntries(
	Object.keys(reduceByType).map(type => [
		type,
		(...payload) => {
			return {
				type,
				payload
			};
		}
	])
);
