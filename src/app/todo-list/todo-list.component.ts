import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, Input} from '@angular/core';
import {TodoInterface} from '../todo.interface';
import {TodoApiService} from '../todo-api.service';
import {MatCard, MatCardActions, MatCardContent} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {TodoCreateDialogComponent} from '../todo-create-dialog/todo-create-dialog.component';

@Component({
  selector: 'app-todo-list',
  imports: [
    MatCard,
    MatCardContent,
    MatCardActions,
    MatButton
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  public items: TodoInterface[] = [];

  constructor(
    private todoApiService: TodoApiService,
    private cdRef: ChangeDetectorRef,
    private dialog: MatDialog
  ) {
    this.todoApiService.getTodos().subscribe((data: any) => {
      this.items = data;
      this.cdRef.detectChanges();
    });
  }

  public onDeleteBtnClick(taskId: number): void {
    this.todoApiService.deleteTask(taskId).subscribe(() => {
      this.items = this.items.filter(item => item.id !== taskId);
    });
  }

  public onAddBtnClick(): void {
    this.dialog.open(TodoCreateDialogComponent, {
      width: '100%',
      maxWidth: '500px'
    }).afterClosed().subscribe((todoName: any) => {
      if (!todoName) {
        return;
      }

      this.todoApiService.addTask({
        todo: todoName,
        userId: 5,
        completed: false
      }).subscribe(result => {
        this.items.unshift(result);
      });
    });
  }
}
