export const initialState = {
	items: []
};

let nextId = 201;
export const addTodo = title => ({
	type: addTodo.name,
	reduce: state => {
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
	}
});

export const removeTodo = (id) => ({
	type: removeTodo.name,
	reduce: state => ({
		...state,
		items: state.items.filter(item => item.id !== id)
	})
});

export const setTodoCompleted = (id, completed) => ({
	type: setTodoCompleted.name,
	reduce: state => ({
		...state,
		items: state.items.map(item => 
			(item.id === id)
				? { ...item, completed }
				: item
		)
	})
});
