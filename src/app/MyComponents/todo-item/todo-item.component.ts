import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Input() i:number;
  @Output() todoDelete: EventEmitter<Todo>=new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo>=new EventEmitter();
  constructor(){}

  ngOnInit(): void {
  }

  OnClick(todo : Todo){
    this.todoDelete.emit(todo);
    console.log("OnClick has been triggered")
  }

  OncheckboxClick(todo : Todo){
    this.todoCheckbox.emit(todo);
  }

}
