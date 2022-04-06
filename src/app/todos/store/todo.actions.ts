import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Todo } from '../models/todo';


//Load Todo List 

export const loadTodoList = createAction(
  '[Todo List Component] Load Todo List'
);

export const loadTodoListSuccess = createAction(
  '[Todo List Effect] Load Todo List Success', 
  props<{ todos: Todo[] }>()
);

export const loadTodoListFailure = createAction(
  '[Todo List Effect] Load Todo List Failure', 
  props<{ error: any }>()
);

// Load Todo

export const loadTodo = createAction(
  "[Todo Details Component] Load Todo",
  props<{ id: number }>()
);

export const loadTodoSuccess = createAction(
  "[Todo Effect] Load Todo Success",
  props<{ selectedTodo: Todo }>()
);

export const loadTodoFailure = createAction(
  "[Todo Effect] Load Todo Failure",
  props<{ error: any }>()
);

// Add Todo

export const addTodo = createAction(
  '[Todo List Component] Add Todo',
  props<{ todo: Todo }>()
);

export const addTodoSuccess = createAction(
  '[Todo Add Effect] Add Todo Success',
  props<{ todo: Todo }>()
);

export const addTodoFailure = createAction(
  '[Todo Add Effect] Add Todo  Failure',
  props<{ error: any }>()
);

// Edit Todo

export const updateTodo = createAction(
  '[Todo List Component] Update Todo',
  props<{ todo: Update<Todo> }>()
);

// Delete Todo

export const deleteTodo = createAction(
  '[Todo List Component] Delete Todo',
  props<{ id: number }>()
);

export const deleteTodoSuccess = createAction(
  '[Todo Delete Effect] Delete Todo Success',
  props<{ id: number }>()
);

export const deleteTodoFailure = createAction(
  '[Todo Delete Effect] Delete Todo  Failure',
  props<{ error: any }>()
);


