import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PageComponent,
        LoaderComponent } from './components';

const components = [
  PageComponent,
  LoaderComponent
];

const modules = [
  CommonModule,
  NgbModule
];

@NgModule({
  imports: [
    ...modules
  ],
  declarations: [...components],
  exports: [
    ...modules,
    ...components
  ]
})
export class SharedModule { }
