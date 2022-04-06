import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromTodoAction from './todo.actions';
import { catchError, concatMap, map, mergeMap, tap } from 'rxjs/operators';
import { TodoService } from '../services/todo.service';
import { of } from 'rxjs';



@Injectable()
export class TodoEffects {

  createTodo$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(fromTodoAction.addTodo),
        mergeMap(action =>
          this.todoService.addTodo(action.todo).pipe(
            map(todo => fromTodoAction.addTodoSuccess({ todo })),
            catchError(error => of(fromTodoAction.addTodoFailure({ error }))))
          ),
    );
  });

  loadTodoList$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(fromTodoAction.loadTodoList),
        mergeMap(action =>
          this.todoService.getTodos().pipe(
            map(todos => fromTodoAction.loadTodoListSuccess({ todos })),
            catchError(error => of(fromTodoAction.loadTodoListFailure({ error }))))
          ),
    );
  });

  loadTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromTodoAction.loadTodo),
      mergeMap(action =>
        this.todoService.getTodo(action.id).pipe(
          map(todo =>
            fromTodoAction.loadTodoSuccess({ selectedTodo: todo })
          ),
          catchError(error =>
            of(fromTodoAction.loadTodoFailure({ error }))
          )
        )
      )
    )
    });

  updateTodo$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(fromTodoAction.updateTodo),
        concatMap(action =>
          this.todoService.updateTodo(
            action.todo.id,
            action.todo.changes
            )
          ),
    );
  },
  {dispatch : false}
  );

  deleteTodo$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(fromTodoAction.deleteTodo),
        mergeMap(action =>
          this.todoService.deleteTodo(action.id).pipe(
            map(() => fromTodoAction.deleteTodoSuccess({ id: action.id })),
            catchError(error => of(fromTodoAction.deleteTodoFailure({ error }))))
          ),
    );
  });


  constructor(
    private actions$: Actions,
    private todoService: TodoService
    ) {}

}
