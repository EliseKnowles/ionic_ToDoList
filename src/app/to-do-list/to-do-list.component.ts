import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {

  ajouter : string;
  importance : important;
  list : TodoItem[] = [];

  constructor() { }

  add(){
    let item : TodoItem = {name: this.ajouter, important: this.importance};
    this.list.push(item)
  }

  remove(index : number){
    this.list.splice(index, 1)
  }

  ngOnInit() {}

}

interface TodoItem {
  name : string, 
  important : important, 
}

enum important {
  low, 
  medium,
  high, 
  urgent, 
}
