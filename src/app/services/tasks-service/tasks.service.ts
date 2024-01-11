import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';


export interface ResponseTodos {
  todos: {
    id: number,
    todo: string,
    completed: boolean,
    userId: number
  }[],
  total: number,
  skip: number,
  limit: number
}


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _httpClient: HttpClient) { }

  getTodos(): Observable<ResponseTodos> {
    return this._httpClient.get<ResponseTodos>('https://dummyjson.com/todos')
  }

}
