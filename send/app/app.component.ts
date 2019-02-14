import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
t1;t2;chk1
fun2(){
  this.t2=localStorage.getItem(this.t1)
}
funlogin(){
  if(this.chk1==true)
  {
    localStorage.setItem(this.t1,this.t2)
  }
}
}
