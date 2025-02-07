import {ChangeDetectorRef, Component, HostListener} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoApiService} from './todo-api.service';
import {TodoInterface} from './todo.interface';
import {PageComponent} from './page/page.component';

@Component({
  selector: 'app-root',
  imports: [PageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [TodoApiService]
})
export class AppComponent {
  @HostListener('mouseover', ['$event'])
  public onPageScroll(event: MouseEvent) {
    console.log(event.clientY, event.clientX);
  }
}
