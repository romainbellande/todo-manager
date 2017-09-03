import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    data: {
      mod: 'doing'
    }
  },
  {
    path: 'done',
    component: TodoComponent,
    data: {
      mod: 'done'
    }
  },
  { path: ':todoId', component: TodoDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
