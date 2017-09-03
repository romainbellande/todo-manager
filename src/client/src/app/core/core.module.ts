import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { CrudService,
         TodoService } from './services';

import { HeaderComponent,
        TodoFormComponent } from './components';

const components = [
  HeaderComponent,
  TodoFormComponent
];

const services = [
  CrudService,
  TodoService
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    ...components
  ],
  providers: [
    ...services
  ],
  exports: [
    ...components
  ],
  entryComponents: [TodoFormComponent]
})
export class CoreModule { }
