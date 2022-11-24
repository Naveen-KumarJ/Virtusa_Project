import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  input="";
  output="";
  sol!:number;
  ques!:number;

  evaluate(){
    if(this.input=="INR" && this.output=="USD"){
      this.sol = this.ques * 2;
    }
    else{
      this.sol = this.ques / 2;
    }
  }
  
}
