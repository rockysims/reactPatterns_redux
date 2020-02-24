
const actByType = {};

let nextId = 201;
actByType['addTodo'] = {
	buildPayload: title => ({
		id: nextId++,
		title
	}),
	reduce: (state, payload) => {
		const { id, title } = payload;
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
};

actByType['removeTodo'] = {
	buildPayload: id => ({
		id
	}),
	reduce: (state, payload) => {
		const { id } = payload;
		return {
			...state,
			items: state.items.filter(item => item.id !== id)
		};
	}
};

actByType['setTodoCompleted'] = {
	buildPayload: (id, completed) => ({
		id,
		completed
	}),
	reduce: (state, payload) => {
		const { id, completed } = payload;
		return {
			...state,
			items: state.items.map(item => 
				(item.id === id)
					? { ...item, completed }
					: item
			)
		};
	}
};

const initialState = {
	items: []
};

// --- //

export const actions = Object.fromEntries(
	Object.keys(actByType).map(type => [
		type,
		(...args) => {
			return {
				type,
				payload: actByType[type].buildPayload(...args)
			};
		}
	])
);

export const rootReducer = (state = initialState, { type, payload }) => {
	const reduce = actByType[type]?.reduce;
	return reduce
		? reduce(state, payload)
		: state;
};
