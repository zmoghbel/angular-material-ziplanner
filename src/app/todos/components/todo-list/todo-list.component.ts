import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import {MatDialog} from '@angular/material/dialog';
import { TodoAddComponent } from '../todo-add/todo-add.component';

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

  constructor(private todoService: TodoService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
    //this.todoService.getTodos().subscribe((todo)=>(this.dataSource.data = todo));
    this.todoService.getTodos()
    .subscribe({
      next:(res)=>{
        this.dataSource.data = res;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("Error while fetching records!!!")
      }
    })
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
        this.getTodos();
      }
    })
  }

  deleteTodo(todoId: number){
    this.todoService.deleteTodo(todoId)
    .subscribe({
      next:(res)=>{
        alert("Todo deleted Successfully");
        this.getTodos();
      },
      error:()=>{
        alert("Error while deleting the records!!!")
      }
    })
  }

  addTodo(todo : Todo){
    this.todoService.addTodo(todo).subscribe((todo) => (this.todos.push(todo)));
    this.getTodos();
  }

}