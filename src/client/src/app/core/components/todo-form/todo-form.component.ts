import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { trigger, state, animate, transition, style } from '@angular/animations';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Todo } from '../../../../../../common/interfaces';
import { TodoService } from '../../../core/services';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('inactive', style({ opacity: 0 })),
      state('active', style({ opacity: 1 })),
      transition('inactive => active', animate(250)),
      transition('active => inactive', animate(250))
    ])
  ]
})
export class TodoFormComponent implements OnInit {
  todoForm: FormGroup;
  isSuccessMsgDisplayed = false;
  fadeInState: 'active' | 'inactive' = 'inactive';

  constructor(private todoService: TodoService,
              private fb: FormBuilder,
              private activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.createForm();
  }

  public onSubmit() {
    const todo: Todo = this.todoForm.value;
    this.todoService.crud.create(todo)
      .subscribe(() => {
        this.isSuccessMsgDisplayed = true;
        this.toggleFade();
        this.close();
        // setTimeout(() => {
        //   this.toggleFade();
        // }, 1500);
      });
  }

  public toggleFade() {
    this.fadeInState = this.fadeInState === 'active' ? 'inactive' : 'active';
  }

  private close() {
    this.activeModal.close();
  }

  private createForm() {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  private toggleMsg() {
    this.isSuccessMsgDisplayed = !this.isSuccessMsgDisplayed;
  }
}
