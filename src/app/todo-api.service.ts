import {Injectable} from '@angular/core';
import {TodoAddTaskInterface, TodoDeletedInterface, TodoInterface} from './todo.interface';
import {map, Observable, tap, timer} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class TodoApiService {
  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
  ) {}

  public getTodos(): Observable<TodoInterface[]> {
    return this.http.get<{
      limit: number,
      skip: number,
      total: number,
      todos: TodoInterface[]
    }>('https://dummyjson.com/todos').pipe(
      map(data => data.todos)
    );
  }

  public deleteTask(id: number): Observable<TodoDeletedInterface> {
    return this.http.delete<TodoDeletedInterface>(`https://dummyjson.com/todos/${id}`).pipe(
      tap(() => {
        this.snackBar.open('Successfully deleted task', undefined, {
          duration: 2000
        });
      })
    );
  }

  public addTask(dto: TodoAddTaskInterface): Observable<TodoInterface> {
    return this.http.post<TodoInterface>('https://dummyjson.com/todos/add', dto).pipe(
      tap(() => {
        this.snackBar.open('Successfully created task', undefined, {
          duration: 2000
        });
      })
    );
  }
}
