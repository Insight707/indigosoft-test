import {Component, model} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-todo-create-dialog',
  imports: [
    MatDialogContent,
    MatFormField,
    MatInput,
    FormsModule,
    MatDialogActions,
    MatButton,
    MatDialogTitle
  ],
  templateUrl: './todo-create-dialog.component.html',
  styleUrl: './todo-create-dialog.component.scss'
})
export class TodoCreateDialogComponent {
  readonly toDoSummary = model<string>();

  constructor(
    private matDialogRef: MatDialogRef<TodoCreateDialogComponent>
  ) {
  }

  public close(returnValue?: string): void {
    this.matDialogRef.close(returnValue);
  }
}
