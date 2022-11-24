import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';

  ngOnInit():void{
    this.update()
  }
  solution:any;
  update(){
    setInterval(()=>{this.solution=new Date()},1000);
}
randnum=0;
updateNum(){
  this.randnum=Math.floor(Math.random() *10);
}

  
}
