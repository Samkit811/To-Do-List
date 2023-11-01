import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { count } from 'rxjs';
import { Todo } from 'src/app/todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title:string;
  desc:string;
  @Output() todoAdd: EventEmitter<Todo>=new EventEmitter();
  @Input() NoOfActivity: number;

  constructor(){}

  ngOnInit(): void {
  }

  OnSubmit(){
    const todo ={
      sno:8,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.todoAdd.emit(todo);
  }

}
