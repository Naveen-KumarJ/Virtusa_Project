import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  in:string="";
  out!:number | string;

  display(value:string){
    this.in = this.in + value;
  }

  allClear(){
    this.in="";
    this.out="";
  }

  delete(){
    this.in = this.in.substring(0,this.in.length-1);
  }

  evaluate(){
    this.out=eval(this.in);
  }

}
