import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Todo } from '../models/todo';
import * as TodoActions from './todo.actions';

export const todoesFeatureKey = 'todos';

export interface TodoState extends EntityState<Todo> {
  // additional entities state properties
  error: any;
  selectedTodo : Todo;
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: TodoState = adapter.getInitialState({
  // additional entity state properties
  error: null,
  selectedTodo: <Todo>{}
});


export const reducer = createReducer(
  initialState,
  on(TodoActions.addTodoSuccess,
    (state, action) => adapter.addOne(action.todo, state)
  ),
  on(TodoActions.addTodoFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),
  on(TodoActions.loadTodoListSuccess,
    (state, action) => adapter.setAll(action.todos, state)
  ),
  on(TodoActions.loadTodoListFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),
  on(TodoActions.loadTodoSuccess, (state, action) => {
    return {
      ...state,
      selectedTodo: action.selectedTodo
    };
  }),
  on(TodoActions.loadTodoFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }),
  on(TodoActions.updateTodo,
    (state, action) => adapter.updateOne(action.todo, state)
  ),
  on(TodoActions.deleteTodoSuccess,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(TodoActions.deleteTodoFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
