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
}
