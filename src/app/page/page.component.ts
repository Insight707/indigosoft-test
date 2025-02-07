import {ChangeDetectorRef, Component} from '@angular/core';
import {TodoListComponent} from '../todo-list/todo-list.component';
import {TodoInterface} from '../todo.interface';
import {TodoApiService} from '../todo-api.service';

@Component({
  selector: 'app-page',
  imports: [
    TodoListComponent
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {

}
