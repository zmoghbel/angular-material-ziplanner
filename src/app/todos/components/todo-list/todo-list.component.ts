import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import {MatDialog} from '@angular/material/dialog';
import { TodoAddComponent } from '../todo-add/todo-add.component';
import { Store } from '@ngrx/store';
import * as fromActions from '../../store/todo.actions';
import { TodoState } from '../../store/todo.reducer';
import { Observable, of } from 'rxjs';
import * as TodoStoreSelectors from '../../store/todo.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  public displayedColumns: string[] = ['title', 'date','time', 'isDone','reminder','actions'];
  public dataSource = new MatTableDataSource<Todo>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private todoService: TodoService,
    public dialog: MatDialog,
    private store: Store<TodoState>) { }

  ngOnInit(): void {
    //this.store.dispatch(fromActions.loadTodoList());
    //this.getTodos();

    this.store.dispatch(fromActions.loadTodoList());
    this.store.select(TodoStoreSelectors.selectTodoList).subscribe(
      todos => 
      {
        this.todos = todos;
        this.dataSource.data = todos;
      }
  );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editTodo(todo:Todo){
    this.dialog.open(TodoAddComponent,{
      width:'30%',
      data: todo
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        //this.getTodos();
      }
    })
  }

  deleteTodo(id: number){
    this.store.dispatch(fromActions.deleteTodo({ id }));
  }

}