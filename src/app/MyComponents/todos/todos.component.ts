import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string;
  todos: any; 
  samkit:string = "samkit Salot";
  length:0;
  constructor(){
      // this.localItem = localStorage.getItem("todos");
      if(localStorage.getItem("todos"))
      {
        this.localItem = JSON.parse(localStorage.getItem("todos") || '{}');
      }
      else
      {
        this.localItem = "";
      }
      // this.localItem = JSON.parse(localStorage.getItem("todos") || '{}');
      if(this.localItem == ''){
      this.todos = [];
      }
      else{
      // this.todos = [];
      this.todos=this.localItem;
      }
    }

    ngOnInit(): void{
    }

    deleteTodo(todo:Todo){
      console.log(todo);
      const index=this.todos.indexOf(todo);
      this.todos.splice(index,1);
      localStorage.setItem("todos",JSON.stringify(this.todos));
    }

    addTodo(todo:Todo){
      console.log(todo);
      this.todos.push(todo);
      localStorage.setItem("todos",JSON.stringify(this.todos));
    }

    toggleTodo(todo:Todo){
      const index=this.todos.indexOf(todo);
      this.todos[index].active = ! this.todos[index].active;
      localStorage.setItem("todos",JSON.stringify(this.todos));
    }
}
