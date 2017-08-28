import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudService,
         TodoService } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    CrudService,
    TodoService
  ]
})
export class CoreModule { }
