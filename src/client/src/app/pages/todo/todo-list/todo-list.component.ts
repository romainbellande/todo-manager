import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../../core/services';
import { Todo } from '../../../../../../common/interfaces';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Array<Todo>;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  public remove(todo: Todo) {
    this.todoService.crud.remove(todo)
      .subscribe();
  }

  public toggleEditMod(todo: Todo) {
    todo.isEditMod = !todo.isEditMod;
  }
}
