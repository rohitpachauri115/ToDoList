import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  title!: string;
  desc!: string;
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    const todo = {
      serialNo: 8,
      title: this.title,
      desc: this.desc,
      active: true,
    };
    this.addTodo.emit(todo);
  }
}
