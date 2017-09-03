import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { TodoService } from '../../core/services';
import { Todo } from '../../../../../common/interfaces';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  mod: 'doing' | 'done';
  constructor(public todoService: TodoService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.mod = this.route.snapshot.data['mod'];
  }
}
