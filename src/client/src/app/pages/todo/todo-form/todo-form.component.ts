import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Todo } from '../../../../../../common/interfaces';
import { TodoService } from '../../../core/services';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  todoForm: FormGroup;

  constructor(private todoService: TodoService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    const todo: Todo = this.todoForm.value;
    this.todoService.crud.create(todo)
      .subscribe(() => {
        console.log('list', this.todoService.crud.list);
      });
  }
}
