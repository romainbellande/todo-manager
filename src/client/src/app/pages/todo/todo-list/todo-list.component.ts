import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../../core/services';
import { Todo } from '../../../../../../common/interfaces';

type SortType = -1 | 1 | 0;
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

  public remove(todo: Todo): void {
    this.todoService.crud.remove(todo)
      .subscribe();
  }

  public sortTodos(todos: Array<Todo>): Array<Todo> {
    return this.todos.sort((a, b) => {
      return (this.booleanToInt(a.isChecked) - this.booleanToInt(b.isChecked));
    });
  }

  public toggleCheck(todo: Todo): void {
    todo.isChecked = !todo.isChecked;
  }

  private booleanToInt(val: boolean): number {
    return val ? 1 : 0;
  }

  private compareCheck(a: Todo, b: Todo): SortType | number {
    const check1 = a.isChecked ? 1 : 0;
    return (this.booleanToInt(a.isChecked) - this.booleanToInt(b.isChecked));
  }

  private compareCreatedAt(a: Todo, b: Todo): SortType {
    const date1 = new Date(a.createdAt);
    const date2 = new Date(b.createdAt);
    return date1 > date2 ? -1 : date1 < date2 ? 1 : 0;
  }
}
