import { ADD_TODO, DELETE_ALL, REMOVE_TODO, UPDATE_TODO, UPDATE_CHECKBOX } from "../actions";

const initialState = [
    { id: 1, todo: 'Buy Laptop', complete: false },
    { id: 2, todo: 'Cable Repairing Now', complete: false },
    { id: 3, todo: 'Order Some Pizza Today Home Delivery', complete: true },
    { id: 4, todo: 'Tomorrow Interview, Get Prepared The Interview', complete: false },
]

export const operationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_ALL:
            return []
        case REMOVE_TODO:
            const filterTodoId = state.filter((todo) => todo.id !== action.payload)
            return filterTodoId;

        case UPDATE_TODO:
            let data = action.payload;
            const updatedArray = [];
            state.map((item) => {
                if (item.id === data.id) {
                    item.id = data.id
                    item.todo = data.todo
                    item.complete = data.complete;
                }
                updatedArray.push(item);
            })
            return updatedArray;

        case UPDATE_CHECKBOX:
            let todoArray = [];
            state.map((item) => {
                if (item.id === action.payload) {
                    item.complete = !item.complete;
                }
                todoArray.push(item)
            });
            return todoArray;
        default: return state;
    }

}; 