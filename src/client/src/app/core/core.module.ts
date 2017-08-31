import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CrudService,
         TodoService } from './services';

import { HeaderComponent,
        TodoFormComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    HeaderComponent,
    TodoFormComponent
  ],
  providers: [
    CrudService,
    TodoService
  ],
  exports: [
    HeaderComponent
  ],
  entryComponents: [TodoFormComponent]
})
export class CoreModule { }
