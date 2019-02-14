import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 sno = '100';
 uname = "srv"

  constructor()
  {
    localStorage.setItem("sno", "100"), // in the form of key:String and value :string;
    localStorage.setItem("uname",this.uname)
  }


}
