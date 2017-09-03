import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  nbTodo: number;
  nbDone: number;
  constructor(private modalService: NgbModal,
              private todoService: TodoService) { }

  ngOnInit() {
    this.nbTodo = this.todoService.crud.list.filter(a => !a.isChecked).length;
    this.nbDone = this.todoService.crud.list.length - this.nbTodo;
    console.log('list', this.todoService.crud.list);
  }

  public openTodoForm() {
    this.modalService.open(TodoFormComponent);
  }
}
