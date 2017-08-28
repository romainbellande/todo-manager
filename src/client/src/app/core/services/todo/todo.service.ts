import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { ApiService } from '../api/api.service';
import { CrudService } from '../crud/crud.service';
import { Todo } from '../../../../../../common/interfaces';

@Injectable()
export class TodoService extends ApiService {
  _url = '/todos';

  constructor(crud: CrudService) {
    super(crud);
  }
}
