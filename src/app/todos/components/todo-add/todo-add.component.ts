import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter();

  todoAddForm: FormGroup = this.formBuilder.group({
    title: [''],
    date: [''],
    time: [''],
    reminder: ['']
  });

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {

  }

  submit() {
    let values = this.todoAddForm.value;

    if(!values['title']){
      alert("Please Enter title of Todo: ");
      return;
    }

    const newTodo: Todo = {
      title : values['title'],
      date: values['date'],
      time: values['time'],
      description: null,
      reminder: values['reminder'],
      isDone: false 
    };

    this.onAddTodo.emit(newTodo);
  }

}
