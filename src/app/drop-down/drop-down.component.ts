import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  value:string="";
  ur:any;
  check(){
    if(this.value=='Python'){
      this.ur="/assets/python.png";
    }
    else if(this.value=='Angular'){
      this.ur="/assets/angular.png";
    }
    else if(this.value=='React'){
      this.ur="/assets/react.png";
    }
  }
}
