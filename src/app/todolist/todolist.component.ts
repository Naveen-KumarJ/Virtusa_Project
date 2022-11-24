import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  val:any;
  students_list:any[]=[];

  addInfo(id:string,name:string){
    this.students_list.push({id,name})
    console.warn(this.students_list)
  }

  deleteIt(id_num:number){
    console.warn(id_num);
    this.students_list=this.students_list.filter(item=>item.id!==id_num)
  }
}
