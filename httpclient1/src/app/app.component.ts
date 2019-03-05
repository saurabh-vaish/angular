import { Component,Inject } from '@angular/core';
import {RestService} from "./rest.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
 constructor(@Inject (RestService) public rs){
 }
 tab_data;t1;t2;oldobj;
 funup(un,ct){
   this.t1=un;
   this.t2=ct;
   this.oldobj={uname:this.t1}
  
 }
 funsave(){
  var newobj={uname:this.t1,city:this.t2}
  var arr=[this.oldobj,newobj]
  alert(arr)
  this.rs.updaterestservice(arr).subscribe(dt=>{
    alert(dt.rsp)
    this.funget()
  })
 }
 funget(){
   this.rs.getrestservice().subscribe(dt=>{
     alert(dt)
     this.tab_data=dt
   })
  }
   funpost(){
     var obj={uname:'x',city:"hy"}
     this.rs.insrestservice(obj).subscribe(dt=>{
      this.tab_data=dt
      alert(dt.resp)
      this.funget()
    })
   }
 
}
