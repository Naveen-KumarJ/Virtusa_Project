import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-date-time',
  templateUrl: './current-date-time.component.html',
  styleUrls: ['./current-date-time.component.css']
})
export class CurrentDateTimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.update()
  }
  solution:any;
  update(){
    setInterval(()=>{this.solution=new Date()},1000);
}
}
