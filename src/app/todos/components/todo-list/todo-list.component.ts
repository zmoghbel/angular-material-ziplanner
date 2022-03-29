import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

const todos: Todo[] = [
  {
    id: 1,
    title: 'Doctors Appointment',
    date: 'May 5th at 2:30pm',
    isDone: false,
    alarmOn: true,
  },
  {
    id: 2,
    title: 'Meeting at School',
    date: 'May 6th at 1:30pm',
    isDone: false,
    alarmOn: true,
  },
  {
    id: 3,
    title: 'Food Shopping',
    date: 'May 7th at 12:30pm',
    isDone: false,
    alarmOn: false,
  },
];

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'date', 'isDone','alarmOn'];
  dataSource = todos;

  constructor() { }

  ngOnInit(): void {
  }

}
