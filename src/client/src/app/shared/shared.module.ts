import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

const pipes = [];

@NgModule({
  imports: [
    ...modules
  ],
  declarations: [
    ...components,
    ...pipes
  ],
  exports: [
    ...modules,
    ...components,
    ...pipes
  ]
})
export class SharedModule { }
