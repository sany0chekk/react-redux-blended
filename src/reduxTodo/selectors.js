import { createSelector } from '@reduxjs/toolkit';

export const selectTodos = state => state.todos.items;
export const selectFilterByName = state => state.filter;
export const selectEditedTodo = state => state.todos.currentTodo;

export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilterByName],
  (todos, filter) => {
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
