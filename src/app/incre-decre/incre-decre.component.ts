import { BinaryOperatorExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incre-decre',
  templateUrl: './incre-decre.component.html',
  styleUrls: ['./incre-decre.component.css']
})
export class IncreDecreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  number=0;
  change(type:string){
    type==='add'?this.number++:this.number--;
  }
}
