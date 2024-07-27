import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    currentTodo: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setEditTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
    updateTodo: (state, action) => {
      state.items = state.items.map(todo => {
        return todo.id === state.currentTodo.id
          ? { id: state.currentTodo.id, text: action.payload }
          : todo;
      });
      state.currentTodo = null;
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const { addTodo, deleteTodo, setEditTodo, updateTodo } =
  todoSlice.actions;
