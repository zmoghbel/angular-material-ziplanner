import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { TodoAddComponent } from 'src/app/todos/components/todo-add/todo-add.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(TodoAddComponent, {
      width:'300px'
    });
  }

  ngOnInit(): void {
  }

}
