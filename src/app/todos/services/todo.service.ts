import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs";
import { Todo } from "../models/todo";

const httpOptions = {
    headers : new HttpHeaders ({
        'Content-Type' : 'application/json',
    }),
};

@Injectable({
    providedIn: 'root'
})
export class TodoService{
    private apiUrl = "http://localhost:5000/todos";

    constructor( private http: HttpClient){}

    getTodos() : Observable<Todo[]>{
        return this.http.get<Todo[]>(this.apiUrl);
    }

    getTodo(todoId: number): Observable<Todo> {
        const url = `${this.apiUrl}/${todoId}`;
        return this.http.get<Todo>(url);
      }

    deleteTodo(todoId: number ) : Observable<Todo>{
        const url = `${this.apiUrl}/${todoId}`;
        return this.http.delete<Todo>(url);
    }

    updateTodo(todoId: string | number, changes: Partial<Todo>): Observable<Todo>{
        const url = `${this.apiUrl}/${todoId}`;
        return this.http.put<Todo>(url, changes, httpOptions);
    }

    addTodo(todo: Todo) : Observable<Todo>{
        return this.http.post<Todo>(this.apiUrl, todo, httpOptions);
    }
}