import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Endpoint } from '../../../../../../common/interfaces';
import { CoreConfig } from '../../../../../../common/config/core.config';
import { CrudOptions } from '../../../common/interfaces';

@Injectable()
export class CrudService<T> {
  endpoint: Endpoint;
  options: CrudOptions;
  list: Array<T>;

  constructor(private http: HttpClient) {}

  public setup(endpoint: Endpoint, options?: CrudOptions) {
    this.endpoint = endpoint;
    this.options = options;
    this.list = this.options && this.options.enableList ? [] : null;
  }

  public find(): Observable<Array<T>> {
    return this.http.get(this.getEndpoint(true))
    .map((res: Array<T>) => {
      if (this.list) {
        this.list = res;
      }
      return res;
    });
  }

  public create(body: T): Observable<T> {
    return this.http.post(this.getEndpoint(true), body)
      .map((res: T) => {
        if (this.list) {
          this.list.push(res);
        }
        return res;
      });
  }

  private getEndpoint(plural?: boolean) {
    const path =  '/' + (plural ? (this.endpoint.plural || this.endpoint.name + 's') : this.endpoint.name);
    return CoreConfig.BASE_API + path;
  }
}
