import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { TodoService } from "./services/todo.service";
import { TodoAddComponent } from "./components/todo-add/todo-add.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { StoreModule } from '@ngrx/store';
import * as fromTodo from './store/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './store/todo.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [
    TodoAddComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forFeature(fromTodo.todoesFeatureKey, fromTodo.reducer),
    EffectsModule.forFeature([TodoEffects])
  ],
  providers: [TodoService],
  exports: [
    TodoAddComponent,
    TodoListComponent
  ]
})
export class TodosModule {}