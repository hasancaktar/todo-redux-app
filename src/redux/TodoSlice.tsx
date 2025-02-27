import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TodoInitialState, TodoType} from "../types/Types.tsx";

const initialState: TodoInitialState = {
    todos: JSON.parse(localStorage.getItem('todos') || '[]')
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        createTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
            state.todos = [...state.todos, action.payload]
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        removeTodoById: (state: TodoInitialState, action: PayloadAction<number>) => {
            state.todos = [...state.todos.filter((todo: TodoType) => todo.id !== action.payload)]
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        editTodo: (state, action: PayloadAction<TodoType>) => {
            state.todos = [...state.todos.map((todo: TodoType) => todo.id !== action.payload.id ? todo : action.payload)]
            localStorage.setItem("todos", JSON.stringify(state.todos));
        }
    },
})

export const {createTodo, removeTodoById, editTodo} = todoSlice.actions
export default todoSlice.reducer