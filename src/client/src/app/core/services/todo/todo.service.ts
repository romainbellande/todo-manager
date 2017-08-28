import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { ApiService } from '../api/api.service';
import { CrudService } from '../crud/crud.service';
import { Todo, todoEndpoint } from '../../../../../../common/interfaces';

@Injectable()
export class TodoService {
  todos: Array<Todo>;

  constructor(public crud: CrudService<Todo>) {
    this.crud.setup(todoEndpoint, {
      enableList: true
    });
  }
}
