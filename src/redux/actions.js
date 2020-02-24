import { ADD_TODO, REMOVE_TODO, SET_TODO_COMPLETED } from "./actionTypes";

let nextId = 201;

export const addTodo = title => {
	return {
		type: ADD_TODO,
		payload: {
			id: nextId++,
			title
		}
	};
};

export const removeTodo = id => ({
	type: REMOVE_TODO,
	payload: {
		id
	}
});

export const setTodoCompleted = (id, completed) => ({
	type: SET_TODO_COMPLETED,
	payload: {
		id,
		completed
	}
});