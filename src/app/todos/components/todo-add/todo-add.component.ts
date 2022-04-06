import { Component, EventEmitter, Inject, Injectable, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { TodoState } from '../../store/todo.reducer';
import * as fromActions from '../../store/todo.actions';
import { Update } from '@ngrx/entity';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  todoAddForm !: FormGroup;
  actionBtn: string = "Save";

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editTodo: Todo,
    private matRef: MatDialogRef<TodoAddComponent>,
    protected store: Store<TodoState>
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
        this.store.dispatch(fromActions.addTodo({
          todo: this.todoAddForm.value
        }));
        this.matRef.close('save');
    
        this.todoAddForm = {} as FormGroup ;
      }
    } else {
      this.updateTodo();
    }

  }
  

  updateTodo(){
    const update:Update<Todo> ={
      id: this.editTodo.id,
      changes: this.todoAddForm.value
    }

    this.store.dispatch(fromActions.updateTodo({todo: update}));
    this.matRef.close('update');
    this.todoAddForm = {} as FormGroup ;
  }
}
