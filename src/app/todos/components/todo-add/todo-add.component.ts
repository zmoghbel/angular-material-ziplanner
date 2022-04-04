import { Component, EventEmitter, Inject, Injectable, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter();
  todoAddForm !: FormGroup;
  actionBtn: string = "Save";

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService,
    @Inject(MAT_DIALOG_DATA) public editTodo: Todo,
    private matRef: MatDialogRef<TodoAddComponent>
  ) {}

  ngOnInit() {
    this.todoAddForm = this.formBuilder.group({
      title: ['',Validators.required],
      date: [''],
      time: [''],
      description: [''],
      reminder:[''],
      isDone:['']
    });

    if(this.editTodo){
      this.actionBtn = "Update";
      this.todoAddForm.controls['title'].setValue(this.editTodo.title);
      this.todoAddForm.controls['date'].setValue(this.editTodo.date);
      this.todoAddForm.controls['time'].setValue(this.editTodo.time);
      this.todoAddForm.controls['description'].setValue(this.editTodo.description);
      this.todoAddForm.controls['reminder'].setValue(this.editTodo.reminder);
      this.todoAddForm.controls['isDone'].setValue(this.editTodo.isDone);
    }

  }

  addTodo(){
    if(!this.editTodo){
      if(this.todoAddForm.valid){
        this.todoService.addTodo(this.todoAddForm.value)
        .subscribe({
          next:(res)=>{
            alert("New todo added");
            this.todoAddForm.reset();
            this.matRef.close('save');
          },
          error:()=>{
            alert("Error while adding new todo")
          }
        })
      }
    } else {
      this.updateTodo();
    }
  }
  

  updateTodo(){
    this.todoService.EditTodo(this.todoAddForm.value, this.editTodo.id)
    .subscribe({
      next:(res)=>{
        alert("Todo Updated Successfully");
        this.todoAddForm.reset();
        this.matRef.close('update');
      },
      error:()=>{
        alert("Error while updating the todo")
      }
    })
  }
  /*
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
  }*/

}
