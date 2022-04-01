import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  public displayedColumns: string[] = ['id', 'title', 'date','time', 'isDone','reminder','actions'];
  public dataSource = new MatTableDataSource<Todo>();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
    this.todoService.getTodos().subscribe((todo)=>(this.dataSource.data = todo));
  }

  editTodo(todo:Todo){}

  deleteTodo(todoId: number){}

  addTodo(todo : Todo){
    this.todoService.addTodo(todo).subscribe((todo) => (this.todos.push(todo)));
    this.getTodos();
  }

}
