import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../core/services';
import { Todo } from '../../../../../common/interfaces';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(public todoService: TodoService) { }

  ngOnInit() {
    this.todoService.crud.find()
      .subscribe();
  }

}
