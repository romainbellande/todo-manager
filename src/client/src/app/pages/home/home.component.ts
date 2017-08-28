import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../core/services';
import { Todo } from '../../../../../common/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todos: Array<Todo>;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.find()
      .subscribe(res => {
        this.todos = res;
      });
  }

  toggleEditMod(todo: Todo) {
    todo.isEditMod = !todo.isEditMod;
  }
}
