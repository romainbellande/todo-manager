import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { CoreConfig } from '../../../../../../common/config/core.config';
import { CrudService } from '../crud/crud.service';

@Injectable()
export abstract class ApiService {
  protected _url: string;
  constructor(protected crud: CrudService) {}

  find(): Observable<any> {
    return this.crud.find(this.url);
  }

  get url(): string {
    return CoreConfig.BASE_API + this._url;
  }
}
