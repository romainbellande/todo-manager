import { Component, OnInit } from '@angular/core';

import { TodoService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.crud.find()
    .subscribe();
  }
}
