import { Injectable } from '@angular/core';
import {Todo} from "../models/todo";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const httpOptions = {
  headers : new HttpHeaders ({
      'Content-Type' : 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = "http://localhost:5000/todos";

  constructor(private httpClient:HttpClient) { }

    /**
   * This method returns todos details
   */
     getTodos(): Observable<Todo[]>{
      return this.httpClient.get<Todo[]>(this.apiUrl);
    }
    
    getTodo(todoId: number): Observable<Todo> {
      const url = `${this.apiUrl}/${todoId}`;
      return this.httpClient.get<Todo>(url);
    }

    deleteTodo(todoId: number ) : Observable<Todo>{
        const url = `${this.apiUrl}/${todoId}`;
        return this.httpClient.delete<Todo>(url);
    }
  
    updateTodo(todoId: string | number, changes: Partial<Todo>): Observable<Todo>{
        const url = `${this.apiUrl}/${todoId}`;
        return this.httpClient.put<Todo>(url, changes, httpOptions);
    }

    EditTodo(todo:Todo, todoId?:number): Observable<Todo>{
      const url = `${this.apiUrl}/${todoId}`;
      return this.httpClient.put<Todo>(url,todo, httpOptions);
    }
  
    addTodo(todo: Todo) : Observable<Todo>{
        return this.httpClient.post<Todo>(this.apiUrl, todo, httpOptions);
    }

}
