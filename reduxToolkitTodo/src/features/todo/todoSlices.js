import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{ id, text: "hello world" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload.text
            }
            state.todos.push(todo)
        },
        removeTodo: () => { }
    }
})